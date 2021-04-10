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
          control: isLength,
          options: {min: 5, max: 30},
          value: user.fullName,
          errorMessage: 'İsim 5 ile 30 karakter aralığında olmalı',
        },
        {
          control: isEmail,
          value: user.email,
          errorMessage: 'E-mail doğru formatta değil',
        },
        {
          control: isLength,
          options: {min: 6},
          value: user.password,
          errorMessage: 'Şifre minimum 6 karakter olmalı',
        },
      ],
      detailedControl,
    );
  }
}
