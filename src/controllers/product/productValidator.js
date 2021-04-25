/* Validators */
const {
  isNumeric,
  isFull,
  isBoolean,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  productFormValidate: function (product, checkOnlyExisting) {
    return validateItems([
        {
          method: isNumeric,
          key: 'categoryId',
          value: product.categoryId,
          required: true,
        },
        {
          method: isNumeric,
          key: 'coverGalleryId',
          value: product.coverGalleryId,
        },
        {
          method: isNumeric,
          key: 'contentGalleryId',
          value: product.contentGalleryId,
        },
        {
          method: isNumeric,
          key: 'evaluationGroupId',
          value: product.evaluationGroupId,
          required: true,
        },
        {
          method: isFull,
          key: 'name',
          value: product.name,
          required: true,
        },
        {
          method: isNumeric,
          key: 'sort',
          value: product.sort,
        },
        {
          method: isBoolean,
          key: 'status',
          value: product.status,
        },
        {
          method: isBoolean,
          key: 'deleted',
          value: product.deleted,
        },
      ],
      checkOnlyExisting,
    );
  }
}
