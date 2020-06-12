function linearSearch(array, number){
    // add whatever parameters you deem necessary - good luck!
    for(const [index, item] of array.entries()){
        if(number === item) return index
    }
    return -1;
}


const result = linearSearch([1, 2, 5, 6, 7, 8, 10 , 15], 10);

console.log('result:', result)
