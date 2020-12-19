/* Controllers */
const commentController = require('../controllers/comment/commentController');

module.exports = function (router) {
    router.all('/comment/productId/:productId/page/:page?', commentController.commentProducts);
};
