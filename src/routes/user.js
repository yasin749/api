/* Controllers */
const userController = require('../controllers/user/userController');

module.exports = function (router) {
  router.get('/user', userController.users);
  router.post('/user', userController.addUser);
  router.get('/user/:userId', userController.userDetail);
  router.put('/user/:userId', userController.editUser);
  router.delete('/user/:userId', userController.deleteUser);
};
