/* Controllers */
const productController = require('../controllers/product/productController');

module.exports = function (router) {
    router.all('/product/categoryId/:categoryId/page/:page?', productController.categoryProducts);
};
