/* Middlewares */
const productMiddleware = require('../controllers/product/productMiddleware');

/* Controllers */
const productController = require('../controllers/product/productController');

module.exports = function (router) {
  router.post('/product', productMiddleware.addProduct, productController.addProduct);
  router.get('/product/:productId', productController.productDetail);
  router.put('/product/:productId', productMiddleware.editProduct, productController.editProduct);
  router.delete('/product/:productId', productMiddleware.deleteProduct, productController.deleteProduct);
};
