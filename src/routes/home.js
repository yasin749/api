/* Controllers */
const homeController = require('../controllers/home/homeController');

module.exports = function (router) {
  router.get('/', homeController.home);
  router.get('/status', homeController.status);
};
