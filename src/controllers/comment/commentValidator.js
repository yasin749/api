/* Validators */
const {
  isLength,
  isFull,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  commentFormValidate: function (comment, detailedControl) {
    return validateItems([
        {
          control: isLength,
          options: {min: 5},
          value: comment.body,
          errorMessage: 'Yorum en az 5 karakter olmalı',
        },
        {
          control: isFull,
          value: comment.glad,
          errorMessage: 'Memnuniyet durumu belirtilmeli',
        },
      ],
      detailedControl,
    );
  }
}
