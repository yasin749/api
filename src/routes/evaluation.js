/* Controllers */
const evaluationController = require('../controllers/evaluation/evaluationController');

module.exports = function (router) {
    router.all('/evaluation/group/page/:page?', evaluationController.evaluationGroups);
};
