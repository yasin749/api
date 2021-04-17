/* Validators */
const {commentFormValidate} = require('./commentValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addComment: function (req, res, next) {
    const comment = req.body;
    const commentValidate = commentFormValidate(comment, true);

    if (!commentValidate.valid) {
      response.validationError(res, commentValidate.error);
    } else {
      next();
    }
  },
  editComment: function (req, res, next) {
    const comment = req.body;
    const commentValidate = commentFormValidate(comment);

    if (!commentValidate.valid) {
      response.validationError(res, commentValidate.error);
    } else {
      next();
    }
  },
  deleteComment: function (req, res, next) {
    next();
  },
}
