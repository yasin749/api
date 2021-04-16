/* Middleware */
const galleryMiddleware = require('../controllers/gallery/galleryMiddleware');

/* Controllers */
const galleryController = require('../controllers/gallery/galleryController');

module.exports = function (router) {
  router.get('/gallery', galleryController.galleries);
  router.get('/gallery/:galleryId', galleryController.galleryDetail);
  router.post('/gallery', galleryMiddleware.addGallery, galleryController.addGallery);
  router.put('/gallery/:galleryId', galleryMiddleware.editGallery, galleryController.editGallery);
  router.delete('/gallery/:galleryId', galleryMiddleware.deleteGallery, galleryController.deleteGallery);
};
