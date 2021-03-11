/* Controllers */
const userController = require('../controllers/user/userController');

module.exports = function (router) {
  router.all('/user', userController.users);
  router.all('/user/:userId', userController.userDetail);
};
