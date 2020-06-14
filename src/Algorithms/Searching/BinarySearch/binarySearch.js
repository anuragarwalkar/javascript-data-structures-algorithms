function binarySearch(array, number){
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(array[middle] != number && start <= end){
        if(number < array[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    
    return array[middle] === number ? middle : -1;

}



const result = binarySearch([1, 2, 3, 4, 5, 6, 7], 6);

console.log('result:', result);

// My implementation before

// function binarySearch(array, number){
//     // add whatever parameters you deem necessary - good luck!
    
//     let size = array.length;
//     let tempArray = [...array];

//     for(let i = 0; i < size; i++){
//         size = tempArray.length;

//         const devideInHalf = Math.round(size / 2);

//         const rightArray = tempArray.splice(size - devideInHalf)
//         const leftArray = tempArray.splice(-(size - devideInHalf));

//         if(leftArray && leftArray[leftArray.length - 1] >= number){
//             tempArray = leftArray;
//         }else{
//             tempArray = rightArray;
//         }

//         if(tempArray.length === 1){
//             break
//         }
//     }
//     if(tempArray.length === 1){
//         return tempArray[0];
//     }else{
//         return - 1;
//     }
// }

 