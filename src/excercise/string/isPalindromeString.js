const result = isPalindrome("amanaplanacanalpanama"); // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(givenString) {
  // add whatever parameters you deem necessary - good luck!
  if (givenString.length <= 1) {
    return true;
  }

  const reverseString = (srcString) => {
    if (srcString.length === 1) {
      return srcString[0];
    }

    const firstHalf = reverseString(srcString.slice(1));

    return firstHalf + srcString[0];
  };

  const result = reverseString(givenString);

  return result === givenString;
}

console.log(result);
