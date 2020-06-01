function capitalizeFirst (array) {
    // add whatever parameters you deem necessary - good luck!
    const newArray = [];
    if(array.length === 0 ) return []
    const firstChar = array[0][0].toUpperCase();
    const remaning = array[0].slice(1);
    newArray.push(firstChar + remaning);
    return newArray.concat(capitalizeFirst(array.splice(1)));
}

  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

  const result = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

  console.log('result:', result)