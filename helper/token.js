const jwt = require('jsonwebtoken');

const generateAccessToken = async(id) => {
    return jwt.sign({id},process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : '30 days'
        })
}
module.exports = {
    generateAccessToken
}