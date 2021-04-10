/* Validators */
const {userFormValidate} = require('./userValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addUser: function (req, res, next) {
    const user = req.body;
    const userValidate = userFormValidate(user, true);

    if (!userValidate.valid) {
      response.validationError(res, userValidate.error);
    } else {
      next();
    }
  },
  editUser: function (req, res, next) {
    const user = req.body;
    const userValidate = userFormValidate(user);

    if (!userValidate.valid) {
      response.validationError(res, userValidate.error);
    } else {
      next();
    }
  },
  deleteUser: function (req, res, next) {
    // @todo should be authentication control
    next();
  },
}
