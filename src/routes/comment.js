/* Controllers */
const commentController = require('../controllers/comment/commentController');

module.exports = function (router) {
  router.get('/comment', commentController.comments);
  router.get('/comment/user/:userId', commentController.commentsBlongToUser);
  router.get('/comment/product/:productId', commentController.commentsBlongToProduct);
  router.get('/comment/:commentId', commentController.commentDetail);
};
