/* Controllers */
const userController = require('../controllers/user/userController');

module.exports = function (router) {
    router.all('/user/page/:page?', userController.index);
    // user comments endpoint
};
