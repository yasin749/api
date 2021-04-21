function generateValidationError(item) {
  const {
    method,
    options,
    key,
    value,
  } = item;

  return {
    method: method.name,
    options,
    key,
    value,
  };
}

function validate(item) {
  const {
    method,
    options,
    value,
  } = item;

  return method(value, options);
}

function validateItems(toBeVerifiedItems, detailedControl) {
  const errors = [];

  for (let i = 0; i < toBeVerifiedItems.length; i++) {
    const item = toBeVerifiedItems[i];
    const {value} = item;
    const existValue = value !== undefined;

    if (
      (!existValue && detailedControl) ||
      (existValue && !validate(item))
    ) {
      errors.push(generateValidationError(item));
    }
  }
  return errors;
}

module.exports = {
  generateValidationError,
  validate,
  validateItems,
};
