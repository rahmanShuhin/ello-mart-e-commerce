const express = require("express");
const bd = require("./database/index");
const middleware = require("./middlewares/index");
const userRouter = require("./routers/userRoute");
const productRouter = require("./routers/productRoute");
const errorMiddleWare = require("./middlewares/error");
const app = express();

require("dotenv").config();

//BD CONNECTION
bd.connectToAtlas();

//middleware
app.use(...middleware);

//router connection
app.use(userRouter);
app.use(productRouter);

//server connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}...`);
});

//middleware for error
app.use(errorMiddleWare);
