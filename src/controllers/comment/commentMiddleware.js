/* Validators */
const {commentFormValidate} = require('./commentValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addComment: function (req, res, next) {
    const comment = req.body;
    const formValidationErrors = commentFormValidate(comment, true);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  editComment: function (req, res, next) {
    const comment = req.body;
    const formValidationErrors = commentFormValidate(comment);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  deleteComment: function (req, res, next) {
    next();
  },
}
