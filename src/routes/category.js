/* Controllers */
const categoryController = require('../controllers/category/categoryController');

module.exports = function (router) {
  router.all('/category', categoryController.categories);
  router.all('/category/:categoryId', categoryController.categoryDetail);
};
