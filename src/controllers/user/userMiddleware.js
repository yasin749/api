/* Validators */
const {userFormValidate} = require('./userValidator');

/* Response */
const validationResponse = require('../../common/response/validation/validationResponse');

module.exports = {
  addUser: function (req, res, next) {
    const user = req.body;
    const userValidate = userFormValidate(user, true);

    if (!userValidate.valid) {
      validationResponse.error(res, userValidate.error);
    } else {
      next();
    }
  },
  editUser: function (req, res, next) {
    const user = req.body;
    const userValidate = userFormValidate(user);

    if (!userValidate.valid) {
      validationResponse.error(res, userValidate.error);
    } else {
      next();
    }
  },
  deleteUser: function (req, res, next) {
    next();
  },
}
