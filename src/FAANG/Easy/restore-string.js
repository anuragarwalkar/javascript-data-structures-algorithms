var restoreString = function (s, indices) {
  const finalString = [];

  for (let i = 0; i < s.length; i++) {
    finalString[indices[i]] = s[i];
  }

  return finalString.join("");
};

const result = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

console.log("result:", result);
