/* Validators */
const {userFormValidate} = require('./userValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addUser: function (req, res, next) {
    const user = req.body;
    const formValidationErrors = userFormValidate(user, true);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  editUser: function (req, res, next) {
    const user = req.body;
    const formValidationErrors = userFormValidate(user);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  deleteUser: function (req, res, next) {
    next();
  },
}
