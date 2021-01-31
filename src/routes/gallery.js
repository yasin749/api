/* Controllers */
const galleryController = require('../controllers/gallery/galleryController');

module.exports = function (router) {
    router.all('/gallery', galleryController.galleries);
    router.all('/gallery/:galleryId', galleryController.galleryDetail);
};
