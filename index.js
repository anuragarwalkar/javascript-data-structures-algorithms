/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let finalStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "-") {
      finalStr += s[i].toUpperCase();
    }
  }

  let result = "";

  for (let i = 0; i < s.length; i += k) {
    result = `${finalStr.slice(0, k)}-${finalStr.slice(k)}`;
  }

  console.log("finalStr:", result);
};

licenseKeyFormatting("2-5g-3-J", 2);
