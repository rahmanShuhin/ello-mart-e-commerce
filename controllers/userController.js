const User = require('../model/User');
const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');
const catchAsync =  require('../utils/catchAsync');

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
    password : hashedPassword
  })
  res.status(201).json({
    status: 'Success',
    message: 'Account create successful!',
  });
})

module.exports={
    addUser
}
