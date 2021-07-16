function bubbleSort (unsortedArray, order = 'asc') {
    const resultArray = [...unsortedArray];

    for(let outer = 0; outer < resultArray.length; outer++) {
        let outerElement = resultArray[outer];

        for(let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerElement = resultArray[inner];

            if (order === 'asc' ? outerElement > innerElement : outerElement < innerElement) {
                resultArray[outer] = innerElement;
                resultArray[inner] = outerElement;

                outerElement = resultArray[outer];
                innerElement = resultArray[inner];
            }
        }
    }

    return resultArray;
}


const unsortedData = [5, 10, -3, -10, 1, 100, 99];
const sortedData = bubbleSort(unsortedData, 'asc');

console.log('sortedData:', sortedData);