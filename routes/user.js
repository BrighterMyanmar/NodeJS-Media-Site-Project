const router = require('express-promise-router')();
const UserController = require('../controllers/user');
const {verifyToken} = require('../utils/helper');

router.post('/register', (req, res) => UserController.register(req, res));
router.post('/', (req, res) => UserController.login(req, res));
router.post('/test', [verifyToken,UserController.test]);

module.exports = router;