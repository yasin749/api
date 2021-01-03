/* Controllers */
const userController = require('../controllers/user/userController');

module.exports = function (router) {
    router.all('/user', userController.index);
    router.all('/user/:userId', userController.userDetail);
};
