function generateValidationSuccess() {
  return {
    valid: true,
  }
}

function generateValidationError(value, message) {
  return {
    valid: false,
    error: {
      message,
      value,
    }
  }
}

function validate(item) {
  const {
    control,
    options,
    value,
  } = item;

  return control(value, options);
}

function validateItems(toBeVerifiedItems, detailedControl) {
  for (let i = 0; i < toBeVerifiedItems.length; i++) {
    const item = toBeVerifiedItems[i];
    const {value, errorMessage} = item;
    const existValue = value !== undefined;

    if (
      (!existValue && detailedControl) ||
      (existValue && !validate(item))
    ) {
      return generateValidationError(value, errorMessage);
    }
  }
  return generateValidationSuccess();
}

module.exports = {
  generateValidationSuccess,
  generateValidationError,
  validate,
  validateItems,
};
