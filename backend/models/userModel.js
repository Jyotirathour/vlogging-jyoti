const mongoose = require("../connection");

const schema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true },
  password: String,
});

const model = mongoose.model("users", schema);

module.exports = model;
