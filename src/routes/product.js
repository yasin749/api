/* Controllers */
const productController = require('../controllers/product/productController');

module.exports = function (router) {
  router.get('/product/:productId', productController.productDetail);
};
