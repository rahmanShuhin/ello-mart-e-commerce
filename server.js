const express = require("express");
const mongoose = require("mongoose");
const app = express();
//routing import
const userRouter = require("./routers/userRoute");
//middlewares
require("dotenv").config();
//Routes
app.use("api/users/", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

//database connection
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("database connect");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
