function capitalizedWords(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length <= 1) {
    const [word] = array;
    return [word.toUpperCase()];
  }

  const result = capitalizedWords(array.slice(0, -1));
  return result.concat(array.slice(-1)[0].toUpperCase());
}

let words = ["i", "am", "learning", "recursion"];
const result = capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(result);
