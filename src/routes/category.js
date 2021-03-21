/* Controllers */
const categoryController = require('../controllers/category/categoryController');

module.exports = function (router) {
  router.get('/category', categoryController.categories);
  router.get('/category/:categoryId', categoryController.categoryDetail);
};
