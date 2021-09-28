const config = require("../config/password.config");

function validatePasswordLength(password) {
  return password.length >= config.MIN_LONG;
}
function validatePasswordQuantityOfNumbers(password) {
  const nums_in_password = password.replace(/[^0-9]/g, "").length;
  return nums_in_password >= config.MIN_NUM_QUNTITY;
}

exports.validatePasswordLength = validatePasswordLength;
exports.validatePasswordQuantityOfNumbers = validatePasswordQuantityOfNumbers;
