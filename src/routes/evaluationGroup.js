/* Controllers */
const evaluationController = require('../controllers/evaluationGroup/evaluationGroupController');

module.exports = function (router) {
    router.all('/evaluation/group', evaluationController.evaluationGroups);
    router.all('/evaluation/group/:groupId', evaluationController.evaluationGroupDetail);
};
