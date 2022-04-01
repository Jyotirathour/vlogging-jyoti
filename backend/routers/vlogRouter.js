const express = require("express");
const router = express.Router();
const Model = require("../models/vlogModel");

router.post("/add", (req, res) => {
  console.log("add request in user router");
  console.log(req.body);

  // promise method
  new Model(req.body)
    .save()
    .then(() => {
      console.log("user data saved");
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/backendlogin", (req, res) => {
  console.log(req.body);
  let formdata = req.body;
  // promise method
  Model.findOne({ email: formdata.email })
    .then((data) => {
      if (data) {
        if (data.password == formdata.password) {
          console.log("login success");
          res.status(200).json(data);
        } else {
          console.log("password incorrect");
          res.status(300).json({ message: "password incorrect" });
        }
      } else {
        console.log("email not found");
        res.status(300).json({ message: "email not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyuser/:id", (req, res) => {
  Model.find({ user: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
