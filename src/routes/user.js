/* Controllers */
const userController = require('../controllers/user/userController');

module.exports = function (router) {
  router.get('/user', userController.users);
  router.get('/user/:userId', userController.userDetail);
};
