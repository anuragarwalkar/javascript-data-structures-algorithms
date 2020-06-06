function bubbleSort(array) {

    for(let i = array.length; i > 0; i--){
        let noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(array, array[j], array[j + 1])
            const value1 = array[j];
            const value2 = array[j + 1];
            if(value1 > value2){
                swap(array, j, j + 1);
                noSwaps = false;
            }

        }
        if(noSwaps) break;
    }

    return array;
}

function swap (array, index1, index2) {
    // ES-5 Way
    // const temp = array[index1];
    // array[index1] = array[index2];
    // array[index2] = temp;

    // ES-6 Way
    [array[index1], array[index2]] = [array[index2], array[index1]]
}

const unsortedArray = [1, 2, 4, 3, 5, 6];

const result = bubbleSort(unsortedArray);
// const result = unsortedArray.sort((a, b) => a - b);
console.log('result:', result);

