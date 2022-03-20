
const express = require("express")
const bd = require('./database/index')
const middleware = require('./middlewares/index')
const userRouter = require('./routers/userRoute')

const app = express()


require("dotenv").config();

//BD CONNECTION
bd.connectToAtlas();


//middleware
app.use(...middleware);

//router connection
app.use(userRouter)




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
