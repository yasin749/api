/* Controllers */
const homeController = require('../controllers/user/user');

module.exports = function (router) {
    router.all('/user/page/:page?', homeController.index);
};
