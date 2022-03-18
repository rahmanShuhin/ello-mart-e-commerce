const jwt = require('jsonwebtoken');

module.exports = function checkAuth(req, res, next){
    let token;
    const { authorization } = req.headers;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = authorization.split(' ')[1];
    }
    else if (req.cookies.token) {
        token = req.cookies.token;
    }
    if(!token){
        next('Authentication failed!');
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const { userID, userName } = decoded;
    req.userID = userID;
    req.userName = userName;
    next();
}
