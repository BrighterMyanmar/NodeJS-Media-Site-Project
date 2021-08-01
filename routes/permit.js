const router = require('express-promise-router')();
const controller = require('../controllers/permit');

router.get('/',controller.all);
router.post('/',controller.add);

module.exports = router;