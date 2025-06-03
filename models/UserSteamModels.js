import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const SteamUserSchema = new Schema({
  steamId: { type: String },
  displayName: { type: String },
  avatar: { type: String },
  profileurl: { type: String },
  match: { type: String, default: "0" },
  elo: { type: String, default: "300" },
  points: { type: String, default: "0" },
  damage: { type: String, default: "0" },
  kills: { type: String, default: "0" },
  win: { type: String, default: "0" },
  losser: { type: String, default: "0" },
  draw: { type: String, default: "0" },
  rank: { type: String , default: "Bronze"},
  lastMatches: { type: [String], default: ['N', 'N', 'N', 'N', 'N'] },
  isAdmin: { type: Boolean, default: false },
});

export default model('UserSteamModel', SteamUserSchema);
