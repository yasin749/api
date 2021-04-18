/* Middlewares */
const userMiddleware = require('../controllers/user/userMiddleware');

/* Controllers */
const userController = require('../controllers/user/userController');

module.exports = function (router) {
  router.get('/user', userController.users);
  router.post('/user', userMiddleware.addUser, userController.addUser);
  router.get('/user/:userId', userController.userDetail);
  router.put('/user/:userId', userMiddleware.editUser, userController.editUser);
  router.delete('/user/:userId', userMiddleware.deleteUser, userController.deleteUser);
};
