/* Controllers */
const productController = require('../controllers/product/productController');

module.exports = function (router) {
    router.all('/product/:productId', productController.productDetail);
};
