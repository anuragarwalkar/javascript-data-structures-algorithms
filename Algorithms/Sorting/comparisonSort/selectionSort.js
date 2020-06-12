const swap = (unSortedArray, indexOne, indexTwo) =>{
    // Old syntax ES-5
    // const temp = unSortedArray[indexOne];
    // unSortedArray[indexOne] = unSortedArray[indexTwo];
    // unSortedArray[indexTwo] = temp;

    // New syntax ES-6
    [unSortedArray[indexTwo], unSortedArray[indexOne]] = [unSortedArray[indexOne], unSortedArray[indexTwo]]
}


function selectionSort (array) {
    for(let i = 0; i < array.length; i++){
        let minValueIndex = i;
        let minValue = array[i];
        for(let j = i + 1; j < array.length; j++){

            if(minValue > array[j]){
                minValueIndex = j;
                minValue = array[j];
            }

        }

        if(i !== minValueIndex)
        swap(array, i, minValueIndex);

    }

    return array;
}




const result = selectionSort([5, 7, 6, 3, 4, 2, 1]);

console.log('result:', result);