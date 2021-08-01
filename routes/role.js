const router = require('express-promise-router')();
const controller = require('../controllers/role');

router.get('/',controller.all);
router.post('/',controller.add);
router.post('/remove',controller.remove);

module.exports = router;