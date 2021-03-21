/* Controllers */
const imageController = require('../controllers/image/imageController');

module.exports = function (router) {
  router.get('/image', imageController.images);
  router.get('/image/:imageId', imageController.imageDetail);
};
