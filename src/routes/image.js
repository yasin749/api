/* Controllers */
const imageController = require('../controllers/image/imageController');

module.exports = function (router) {
  router.all('/image', imageController.images);
  router.all('/image/:imageId', imageController.imageDetail);
};
