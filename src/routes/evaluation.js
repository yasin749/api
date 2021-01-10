/* Controllers */
const evaluationController = require('../controllers/evaluation/evaluationController');

module.exports = function (router) {
    router.all('/evaluation', evaluationController.evaluations);
    router.all('/evaluation/user/:userId', evaluationController.evaluationsBelongToUser);
    router.all('/evaluation/product/:productId', evaluationController.evaluationsBelongToProduct);
    router.all('/evaluation/:evaluationId', evaluationController.evaluationDetail);
};
