/* Validators */
const {galleryFormValidate} = require('./galleryValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addGallery: function (req, res, next) {
    const gallery = req.body;
    const galleryValidate = galleryFormValidate(gallery, true);

    if (!galleryValidate.valid) {
      response.validationError(res, galleryValidate.error);
    } else {
      next();
    }
  },
  editGallery: function (req, res, next) {
    const gallery = req.body;
    const galleryValidate = galleryFormValidate(gallery);

    if (!galleryValidate.valid) {
      response.validationError(res, galleryValidate.error);
    } else {
      next();
    }
  },
  deleteGallery: function (req, res, next) {
    next();
  },
}
