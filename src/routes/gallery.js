/* Controllers */
const galleryController = require('../controllers/gallery/galleryController');

module.exports = function (router) {
  router.get('/gallery', galleryController.galleries);
  router.get('/gallery/:galleryId', galleryController.galleryDetail);
};
