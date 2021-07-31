const router = require('express-promise-router')();
const controller = require('../controllers/user');
const { verifyToken } = require('../utils/helper');
const { bodyValidate } = require('../utils/validator');
const { register, login } = require('../utils/schema');


router.post('/register', [bodyValidate(register), controller.register]);
router.post('/', [bodyValidate(login), controller.login]);
router.post('/test', [verifyToken, controller.test]);

module.exports = router;