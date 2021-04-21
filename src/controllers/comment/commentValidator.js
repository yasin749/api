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
          method: isLength,
          options: {
            min: 5,
          },
          key: 'body',
          value: comment.body,
        },
        {
          method: isFull,
          key: 'glad',
          value: comment.glad,
        },
      ],
      detailedControl,
    );
  }
}
