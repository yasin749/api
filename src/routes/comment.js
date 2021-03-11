/* Controllers */
const commentController = require('../controllers/comment/commentController');

module.exports = function (router) {
  router.all('/comment', commentController.comments);
  router.all('/comment/user/:userId', commentController.commentsBlongToUser);
  router.all('/comment/product/:productId', commentController.commentsBlongToProduct);
  router.all('/comment/:commentId', commentController.commentDetail);
};
