/* Validators */
const {imageFormValidate} = require('./imageValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addImage: function (req, res, next) {
    const image = req.body;
    const formValidationErrors = imageFormValidate(image);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  editImage: function (req, res, next) {
    const image = req.body;
    const formValidationErrors = imageFormValidate(image, true);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  deleteImage: function (req, res, next) {
    next();
  },
}
