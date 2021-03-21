/* Controllers */
const evaluationController = require('../controllers/evaluation/evaluationController');

module.exports = function (router) {
  router.get('/evaluation', evaluationController.evaluations);
  router.get('/evaluation/user/:userId', evaluationController.evaluationsBelongToUser);
  router.get('/evaluation/product/:productId', evaluationController.evaluationsBelongToProduct);
  router.get('/evaluation/:evaluationId', evaluationController.evaluationDetail);
};
