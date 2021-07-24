const router = require('express-promise-router')();
const UserController = require('../controllers/user');

router.post('/register',(req,res) => UserController.register(req,res));
router.post('/',(req,res) => UserController.login(req,res));

module.exports = router;