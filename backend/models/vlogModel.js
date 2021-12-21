const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  file: String,
  thumbnail: String,
  category: String,
  author: { type: mongoose.Types.ObjectId, ref: "users" },
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("vlogs", schema);

module.exports = model;
