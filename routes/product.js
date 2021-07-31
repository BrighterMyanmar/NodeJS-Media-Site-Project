const router = require('express-promise-router')();
const controller = require('../controllers/product');

router.post('/',controller.create)

module.exports = router;