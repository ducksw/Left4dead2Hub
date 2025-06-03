import Steam from '../models/UserSteamModels.js';

const pl = {};

pl.stats = async (req, res) => {
  const search = req.query.search?.trim();

  // almacena los datos
  let steam = [];

  if (search) {
    steam = await Steam.find({ displayName: { $regex: new RegExp(search, 'i') } });
  } else {
    steam = await Steam.find();
  }

  steam.sort((a, b) => (b.elo || 300) - (a.elo || 300));

  res.render('stats', { steam, search });
}

pl.champions = async (req, res) => {
  const steam = await Steam.find();
  steam.sort((a, b) => (b.points) - (a.points));

  res.render('liga', { steam })
}

pl.ranking = async (req, res) => {
  const allPlayers = await Steam.find();

  // Top 1
  const elos = [...allPlayers].sort((a, b) => (b.elo || 800) - (a.elo || 800)).slice(0, 1);
  const damage = [...allPlayers].sort((a, b) => b.damage - a.damage).slice(0, 1);
  const kill = [...allPlayers].sort((a, b) => b.kills - a.kills).slice(0, 1);
  const wins = [...allPlayers].sort((a, b) => b.win - a.win).slice(0, 1);

  // Top 10
  const ranks = [...allPlayers].sort((a, b) => b.rank - a.rank).slice(0, 10);
  const matchs = [...allPlayers].sort((a, b) => b.match - a.match).slice(0, 10);
  const eloss = [...allPlayers].sort((a, b) => (b.elo || 800) - (a.elo || 800)).slice(0, 10);
  const damages = [...allPlayers].sort((a, b) => b.damage - a.damage).slice(0, 10);
  const kills = [...allPlayers].sort((a, b) => b.kills - a.kills).slice(0, 10);
  const winss = [...allPlayers].sort((a, b) => b.win - a.win).slice(0, 10);
  const losers = [...allPlayers].sort((a, b) => b.losser - a.losser).slice(0, 10);

  res.render('ranking', { 
    elos, 
    damage, 
    kill, 
    wins,
    ranks,
    matchs,
    eloss,
    damages,
    kills,
    winss,
    losers
  });
}


export default pl;
