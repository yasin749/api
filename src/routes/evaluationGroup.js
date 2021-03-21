/* Controllers */
const evaluationController = require('../controllers/evaluationGroup/evaluationGroupController');

module.exports = function (router) {
  router.get('/evaluation/group', evaluationController.evaluationGroups);
  router.get('/evaluation/group/:groupId', evaluationController.evaluationGroupDetail);
};
