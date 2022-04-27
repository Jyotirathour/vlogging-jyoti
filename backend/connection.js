const mongoose = require("mongoose");

const uri =
  "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/vlogging?retryWrites=true&w=majority";

//promise
mongoose
  .connect(uri)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
