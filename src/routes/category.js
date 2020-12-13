/* Controllers */
const categoryController = require('../controllers/category/categoryController');

module.exports = function (router) {
    router.all('/category/page/:page?', categoryController.index);
};
