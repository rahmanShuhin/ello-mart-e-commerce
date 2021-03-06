const express = require('express')
const router = express.Router();
const user = require('../controllers/userController')
const Auth = require('../controllers/userAuthController')
const checkAuth = require('../middlewares/checkAuth')
const {verifyEmail} = require('../controllers/userController')

router.get('/activate-user/verify-email/token',verifyEmail);


router.post('/api/user/register', user.addUser);
router.post('/api/user/login',Auth.login);
router.post('/api/user/logout',Auth.logOut);

router.patch('/api/user/update',user.updateUser);
router.patch('/api/user/address',user.addAddress);







module.exports = router;
