const merge = (arrayOne, arrayTwo) =>{
    const mergedArray = [];
    for(let i = 0; i < arrayOne.length || arrayTwo.length;){

        for(let j = 0; j < arrayOne.length || arrayTwo.length; ){
            if(arrayOne[i] < arrayTwo[j] ){
                mergedArray.push(arrayOne[i]);
                arrayOne.splice(0, 1);
                break;
            }else{
                if(arrayTwo[j] != undefined){
                    mergedArray.push(arrayTwo[j]);
                    arrayTwo.splice(0, 1);
                    if(arrayOne.length === 0 ||arrayTwo.length === 0)break;
                }else{
                    break;
                }
            }
        }
        if(arrayTwo.length > 0) {
            continue;
        }else{
            break;
        }
    }

    return [...mergedArray,...arrayOne, ...arrayTwo];
}

// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }


const mergeSort = (array)=> {
    if (array.length <= 1) return array;
    const arrayLength = array.length;
    const mid = Math.floor(arrayLength / 2);
    const leftHalf = mergeSort(array.slice(0,mid));
    const rightHalf = mergeSort(array.slice(mid));
    return merge(leftHalf, rightHalf);
}


// const result = merge([1, 10, 50], [2, 14, 99, 100]);

const result = mergeSort([10, 24, 76, 73, 2, 1, 4, 10, 7]);

console.log('result:', result);