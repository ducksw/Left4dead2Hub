import Steam from '../models/UserSteamModels.js';

const adm = {}

adm.index = async (req ,res) => {
  res.render("admin/player");
}

adm.create = async (req, res) => {
  const player = req.body;

  try {
    const newPlayer = new Steam(player);
    await newPlayer.save();

    console.log("CREATE PLAYER", player);
    res.redirect('/panel/createPlayer');
  } catch (error) {
    res.status(500).send("Error al crear player: " + error.message);
  }
}

adm.viewOnePlayer = async (req, res) => {
  const user = await Steam.findOne({ steamId: req.params.id });
  res.render('admin/editPlayer', { user });
}

adm.editView = async (req, res) => {
  const users = await Steam.find();

  console.log(users);
  res.render('admin/viewPlayer', { users });
}

adm.editPlayer = async (req, res) => {
  const user = await Steam.findOne({ steamId: req.params.id });
  const updatedUser = await Steam.findByIdAndUpdate(user._id, req.body, { new: true });

  res.render('admin/editPlayer', { user: updatedUser });
}

adm.viewAdmin = async (req, res) => {
  //const admins = await Steam.find({ isAdmin: true });
  const search = req.query.search?.trim();
  let admin = [];

  if (search) {
    admin = await Steam.find({ displayName: { $regex: new RegExp(search, 'i') } });
  } else {
    admin = await Steam.find();
  }


  res.render('admins', { search, admin });
}

export default adm;
