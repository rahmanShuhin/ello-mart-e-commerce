const User = require("../model/User");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Access Denied",
    });

  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
    console.log(error.message);
  }
};
