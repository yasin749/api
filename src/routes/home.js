/* Controllers */
const homeController = require('../controllers/home/home');

module.exports = function (router) {
    router.all('/', homeController.index);
};
