/* Controllers */
const commentMiddleware = require('../controllers/comment/commentMiddleware');

/* Controllers */
const commentController = require('../controllers/comment/commentController');

module.exports = function (router) {
  router.get('/comment', commentController.comments);
  router.get('/comment/user/:userId', commentController.commentsBlongToUser);
  router.get('/comment/product/:productId', commentController.commentsBlongToProduct);
  router.get('/comment/:commentId', commentController.commentDetail);
  router.post('/comment', commentMiddleware.addComment, commentController.addComment);
  router.put('/comment/:commentId', commentMiddleware.editComment, commentController.editComment);
  router.delete('/comment/:commentId', commentMiddleware.deleteComment, commentController.deleteComment);
};
