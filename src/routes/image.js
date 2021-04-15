/* Middlewares */
const imageMiddleware = require('../controllers/image/imageMiddleware');

/* Controllers */
const imageController = require('../controllers/image/imageController');

module.exports = function (router) {
  router.get('/image', imageController.images);
  router.get('/image/:imageId', imageController.imageDetail);
  router.post('/image', imageMiddleware.addImage, imageController.addImage);
  router.put('/image/:imageId', imageMiddleware.editImage, imageController.editImage);
  router.delete('/image/:imageId', imageMiddleware.deleteImage, imageController.deleteImage);
};
