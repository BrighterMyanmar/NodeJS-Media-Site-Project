const router = require('express-promise-router')();
const { get } = require('mongoose');
const CategoryController = require('../controllers/category');

router.post('/',CategoryController.create);
router.get('/',CategoryController.all);

router.route("/:id")
    .get(CategoryController.get)
    .patch(CategoryController.patch)
    .delete(CategoryController.drop);


module.exports = router;