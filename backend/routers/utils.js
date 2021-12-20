const router = require("express").Router();
const multer = require("multer");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploader = multer({ storage: myStorage });

router.post("/uploadfile", uploader.single("file"), (req, res) => {
  res.status(200).json({ message: "file uploaded successfully" });
});

module.exports = router;
