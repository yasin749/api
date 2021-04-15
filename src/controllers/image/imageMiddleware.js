/* Validators */
const {imageFormValidate} = require('./imageValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addImage: function (req, res, next) {
    const image = req.body;
    const imageValidate = imageFormValidate(image, true);

    if (!imageValidate.valid) {
      response.validationError(res, imageValidate.error);
    } else {
      next();
    }
  },
  editImage: function (req, res, next) {
    const image = req.body;
    const imageValidate = imageFormValidate(image);

    if (!imageValidate.valid) {
      response.validationError(res, imageValidate.error);
    } else {
      next();
    }
  },
  deleteImage: function (req, res, next) {
    next();
  },
}
