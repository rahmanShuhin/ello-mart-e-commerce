const nodemailer = require('nodemailer');

//verification mail send
let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : '3ninjas2022@gmail.com',
        pass : 'Threeninjas2022'
    },
    tls : {
        rejectUnauthorized : false,
    }
})
module.exports = {
    transporter
}