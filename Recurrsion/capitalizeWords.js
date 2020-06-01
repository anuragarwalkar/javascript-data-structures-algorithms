function capitalizeWords (array) {
    // add whatever parameters you deem necessary - good luck!
    if(array.length === 0 ) return []
    const tempArray = [];
    const [firstIndex] = array;
    const result = firstIndex.toUpperCase();
    tempArray.push(result)
    return tempArray.concat(capitalizeWords(array.splice(1)));
  }
  
let words = ['i', 'am', 'learning', 'recursion'];
const result = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log('result:', result)