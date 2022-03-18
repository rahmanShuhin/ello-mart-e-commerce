const jwt = require('jsonwebtoken');

const generateAccessToken = async(id, userName) => {
    return jwt.sign({userID : id, userName : userName},process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : '30 days'
        })
}
module.exports = {
    generateAccessToken
}