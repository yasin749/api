/* Validators */
const {galleryFormValidate} = require('./galleryValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addGallery: function (req, res, next) {
    const gallery = req.body;
    const formValidationErrors = galleryFormValidate(gallery);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  editGallery: function (req, res, next) {
    const gallery = req.body;
    const formValidationErrors = galleryFormValidate(gallery, true);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  deleteGallery: function (req, res, next) {
    next();
  },
}
