function mergeSort(unsortedArray) {

    if (unsortedArray.length < 2) {
        return unsortedArray;
    }

    if (unsortedArray.length === 2) {
        return unsortedArray[0] > unsortedArray[1] ? [unsortedArray[1], unsortedArray[0]] : unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const leftArray = unsortedArray.slice(0, middle);
    const rightArray = unsortedArray.slice(middle);
    
    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    const mergedArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;

    while(leftArrayIndex < leftSortedArray.length ||
         rightArrayIndex < rightSortedArray.length) {
            if(leftArrayIndex >= leftSortedArray.length || leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]) {
                mergedArray.push(rightSortedArray[rightArrayIndex])
                rightArrayIndex++;
            }else {
                mergedArray.push(leftSortedArray[leftArrayIndex]);
                leftArrayIndex++;
            }
    }

    return mergedArray;
}

const sortedData = mergeSort([-10, 33, 5, 10, 3, -19, 100 ]);

console.log('sortedData:', sortedData)