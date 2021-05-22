function capitalizeFirst(array) {
  if (array.length <= 1) {
    return [array[0][0].toUpperCase() + array[0].slice(1)];
  }
  // add whatever parameters you deem necessary - good luck!
  const resutl = capitalizeFirst(array.slice(0, -1));
  const [lastElement] = array.slice(-1);
  const [firstChar] = lastElement;
  const newString = firstChar.toUpperCase() + lastElement.slice(1);
  return resutl.concat(newString);
}

const resutl = capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']

console.log(resutl);
