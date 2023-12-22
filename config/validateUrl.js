const URL = require("url").URL;

module.exports.validateUrl = (s) => {
  try {
    new URL(s);
    return true;
  } catch (err) {
    return false;
  }
};