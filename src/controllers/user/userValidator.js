/* Validators */
const {
  isLength,
  isEmail,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  userFormValidate: function (user, detailedControl) {
    return validateItems([
        {
          method: isLength,
          options: {
            min: 5,
            max: 30,
          },
          key: 'fullName',
          value: user.fullName,
        },
        {
          method: isEmail,
          key: 'email',
          value: user.email,
        },
        {
          method: isLength,
          options: {
            min: 6,
          },
          key: 'password',
          value: user.password,
        },
      ],
      detailedControl,
    );
  }
}
