const User = require('../model/User');
const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');
const catchAsync =  require('../utils/catchAsync');
const getToken = require('../helper/token');
const crypto = require('crypto');
const { transporter } = require('../helper/sendEmail');
const moment = require('moment');


// register new user
const addUser = catchAsync(async (req, res, next) => {

  const { name, email, password } = req.body;

  let doesEmailExist = await User.findOne({email})
  
  if(doesEmailExist){
    return next(new AppError('The email is already in use', 400));
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await User.create({
    name, 
    email, 
    password : hashedPassword,
    emailToken :crypto.randomBytes(64).toString('hex'),
    isVerified : false
  })
  const user = await User.findOne({email})

  createSendToken(user,200,res);


  //send verification mail to user
  let mailOptions = {
    from : ' "verify your email" <3ninjas2022@gmail.com>  ',
    to : user.email,
    subject : 'ninja mart -verify your email',
    html : `<h2>Thanks ${user.name} for registering on our website</h2>
            <h4>please verify your email to continue...</h4>
            <a target="_black" href="http://localhost:3000/user/verify-email?token=${user.emailToken}">click here to verify your email</a>`
  }

  //send verification mail
  transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
      console.log(error)
    }
    else{
      console.log('verification is sent to your email address')
    }
  })

})

//token created
const createSendToken = async(user, statusCode, res) => {
  const token = await getToken.generateAccessToken(user._id,user.name, statusCode)
  const timeLimit = 31536000000; // one year

  const cookieOptions = {
      expires: new Date(Date.now() + timeLimit),
      httpOnly: true,
  };

  res.cookie('token',token,cookieOptions)

  user.password = undefined; // hiding the password

  res.status(statusCode).json({
      status: 'Verify your email',
      user,
      token,
      statusCode: 200,
  });
}


//verify user email
const verifyEmail = async(req, res) => {
  try{
    const token = req.query.token
    console.log(token)
    const user = await User.findOne({emailToken : token})
    if(user){
      user.emailToken = null,
      user.isVerified = true
      await user.save()
    }
    else{
      console.log('user is not verified!')
    }
  }
  catch(error){
    console.log(error)
  }
}


//update user
const updateUser = catchAsync(async(req, res, next) => {
  
  const {name, email, mobile, birthday, gender} = req.body;
  
  let newBirthday = birthday;

  moment(newBirthday).format("DD-MM-YYYY");

  (newBirthday === 'Invalid date') ? newBirthday = null : newBirthday

  const user = await User.findOneAndUpdate(
    
    { email },{name, mobile, birthday : newBirthday, gender},{ new : true }).clone()
    
    user.password = undefined;
    user.emailToken = undefined;
    user.isVerified = true;
      
    res.status(202).json({
      status: 'information updated successfully!',
      user,
      statusCode: 202,
  });
})


//address added
const addAddress = catchAsync(async(req, res, next)=> {
  const {_id, division, city, district, address} = req.body;

  const user = await User.findByIdAndUpdate(
    
    { _id },{address:{division, district, city, address}},{ new : true }).clone()
    
    user.password = undefined;
    user.emailToken = undefined;
    user.isVerified = true;
      
    res.status(202).json({
      message: 'Address added successfully!',
      user,
      statusCode: 202,
  });
})


module.exports={
    addUser,
    verifyEmail,
    updateUser,
    addAddress
}
