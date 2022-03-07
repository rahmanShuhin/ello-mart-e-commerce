const express = require("express");
const app = express();
//routing import
const userRouter = require("./routers/userRoute");
//middlewares

//Routes
app.use("api/users/", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

//database connection
// mongoose.connect(process.env.DATABASE__CONNECTION, () => {
//   console.log("database connect");
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
