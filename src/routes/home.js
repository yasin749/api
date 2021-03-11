/* Controllers */
const homeController = require('../controllers/home/homeController');

module.exports = function (router) {
  router.all('/', homeController.home);
  router.all('/status', homeController.status);
};
