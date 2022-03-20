const express = require('express')
const router = express.Router();
const user = require('../controllers/userController')
const Auth = require('../controllers/userAuthController')
const checkAuth = require('../middlewares/checkAuth')

router.get('/info', checkAuth, (req,res)=>{
    res.send('hello');
 })

router.post('/api/user/register', user.addUser);
router.post('/api/user/login',Auth.login);
router.post('/api/user/logout',Auth.logOut);







module.exports = router;
