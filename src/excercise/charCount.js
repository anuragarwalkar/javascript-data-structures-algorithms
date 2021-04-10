const charCount = (string) => {
  if (typeof string == "string") {
    return string.split("").reduce((a, b) => {
      const value = b.toLowerCase();
      if (/[a-z0-9]/.test(value.trim())) {
        if (a[value]) {
          a[value] = a[value] + 1;
        } else {
          a[value] = 1;
        }
      }

      return a;
    }, {});
  } else {
    throw new Error("Not a valid % string");
  }
};

const reuslt = charCount("Anurag Rajendra Arwalkar");

console.log(reuslt);
