/* Middlewares */
const userMiddleware = require('../controllers/user/userMiddleware');

/* Controllers */
const userController = require('../controllers/user/userController');

module.exports = function (router) {
  router.get('/user', userController.users);
  router.get('/user/:userId', userController.userDetail);
  router.post('/user', userMiddleware.addUser, userController.addUser);
  router.put('/user/:userId', userMiddleware.editUser, userController.editUser);
  router.delete('/user/:userId', userMiddleware.deleteUser, userController.deleteUser);
};
