/* Validators */
const {
  isLength,
  isEmail,
  isBoolean,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  userFormValidate: function (user, checkOnlyExisting) {
    return validateItems([
        {
          method: isLength,
          options: {
            min: 5,
            max: 30,
          },
          key: 'fullName',
          value: user.fullName,
          required: true,
        },
        {
          method: isEmail,
          key: 'email',
          value: user.email,
          required: true,
        },
        {
          method: isLength,
          options: {
            min: 6,
          },
          key: 'password',
          value: user.password,
          required: true,
        },
        {
          method: isBoolean,
          key: 'status',
          value: user.status,
        },
        {
          method: isBoolean,
          key: 'deleted',
          value: user.deleted,
        },
      ],
      checkOnlyExisting,
    );
  }
}
