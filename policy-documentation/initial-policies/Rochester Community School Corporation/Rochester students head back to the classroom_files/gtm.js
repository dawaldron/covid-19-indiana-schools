/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
var gdmGoogleTagManager = {
  addZeroPad: function addZeroPad(num) {
    num = Math.abs(num);
    num = num.toString();

    if (num.length === 1) {
      num = "0".concat(num);
    }

    return num;
  },
  getTimezoneOffset: function getTimezoneOffset() {
    var offset = -new Date().getTimezoneOffset() / 60;
    // eslint-disable-next-line no-var
    var sign = offset < 0 ? "-" : "+";
    return "".concat(sign + gdmGoogleTagManager.addZeroPad(offset), ":00");
  }
};
