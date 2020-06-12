function naiveSearch(string, compare) {
    let counter = 0;
    for(let i = 0; i < string.length; i ++){

        for(let j = 0; j < compare.length; j++){
            if(string[i+j] != compare[j]){
               break
            }
            if(j === (compare.length - 1)) counter++;
        }

    }

    return counter;
}

const result = naiveSearch('anuragarwalkar', 'rag');

console.log('result:', result)