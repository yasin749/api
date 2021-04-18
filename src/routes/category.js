/* Middlewares */
const categoryMiddleware = require('../controllers/category/categoryMiddleware');

/* Controllers */
const categoryController = require('../controllers/category/categoryController');

module.exports = function (router) {
  router.get('/category', categoryController.categories);
  router.post('/category', categoryMiddleware.addCategory, categoryController.addCategory);
  router.get('/category/:categoryId', categoryController.categoryDetail);
  router.put('/category/:categoryId', categoryMiddleware.editCategory, categoryController.editCategory);
  router.delete('/category/:categoryId', categoryMiddleware.deleteCategory, categoryController.deleteCategory);
};
