const nodemailer = require('nodemailer');

//verification mail send
let transporter = nodemailer.createTransport({
    host : 'https://skylinkcreative.com/',
    port : 587,
    secure : false,
    auth : {
        user : 'contact@skylinkcreative.com',
        pass : 'lN(wnUtwz5Z~'
    },
    tls : {
        rejectUnauthorized : false,
    }
})
module.exports = {
    transporter
}