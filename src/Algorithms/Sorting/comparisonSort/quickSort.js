const pivit = (array, startIndex = 0, endIndex = array.length) => {

    const swap = (array, indexOne, indexTwo) =>{
        [array[indexTwo], array[indexOne]] = [array[indexOne], array[indexTwo]];
    }

    let pivitIndex = startIndex;

    for(i = startIndex + 1; i < endIndex; i ++) {
        if(array[i] < array[startIndex]){
            swap(array, pivitIndex + 1, i);
            pivitIndex++;
        }
    }

    swap(array, startIndex, pivitIndex);

    return pivitIndex;
}

const quickSort = (array, left = 0, right = array.length) => {
    if(left < right)  {
        const pivitIndex = pivit(array, left, right);
        
        // Left
        quickSort(array, left, pivitIndex);
    
        // Right
        quickSort(array, pivitIndex + 1, right);
    };

    return array;
}

const unsortedArray = [4, 6, 9 ,1, 2, 5];
// const unsortedArray = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];
// const unsortedArray = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];


const result = quickSort(unsortedArray);

console.log('result:', result);