const config = require("../config/password.config");

function HasCorrectLength(password) {
  return password.length >= config.MIN_LONG;
}
function HasTheCorrectQuantityOfNumbers(password) {
  const nums_in_password = password.replace(/[^0-9]/g, "").length;
  return nums_in_password >= config.MIN_NUM_QUNTITY;
}
function IsAValidPassword(password) {
  const a = HasTheCorrectQuantityOfNumbers(password);
  return HasCorrectLength(password) && a;
}
exports.IsAValidPassword = IsAValidPassword;
