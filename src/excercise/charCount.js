const charCount = (string) => {
  if (typeof string == "string") {
    return string.split("").reduce((a, b) => {
      const char = b.toLowerCase();
      if (/[a-z0-9]/.test(char.trim())) {
        a[char] = ++a[char] || 1;
      }

      return a;
    }, {});
  } else {
    throw new Error("Not a valid % string");
  }
};

const reuslt = charCount("Anurag Rajendra Arwalkar");

console.log(reuslt);
