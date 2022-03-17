const { urlencoded } = require("express");
const express = require("express");
const bd = require("./database/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./routers/userRoute");
const productRouter = require("./routers/productRoute");
const errorMiddleWare = require("./middlewares/error");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

require("dotenv").config();

//BD CONNECTION
bd.connectToAtlas();

app.use(userRouter);
app.use(productRouter);

//server connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}...`);
});

//middleware for error
app.use(errorMiddleWare);

// //routing import
// const userRouter = require("./routers/userRoute");
// //middleware

// //Routes
// app.use("api/users/", userRouter);

// app.get("/", (req, res) => {
//   res.json({
//     message: "Welcome",
//   });
// });

// //database connection
// // mongoose.connect(process.env.DATABASE__CONNECTION, () => {
// //   console.log("database connect");
// // });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`);
// });
