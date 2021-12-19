const express = require("express");
const app = express();
const cors = require ("cors");

const port = 5000;

const userRouter = require("./routers/userRouter");

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.use(express.static("./uploads"));

app.use("/user", userRouter);

app.listen(port, () => {
  console.log("server successfully started on port 5000");
});
