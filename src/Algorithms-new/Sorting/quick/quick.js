function quickSort (unsortedArray) {
    const copiedArray = [...unsortedArray];

    if(copiedArray.length <= 1) {
        return copiedArray;
    }

    const pivitElement = copiedArray.shift();

    const centerElementArray = [pivitElement];
    const smallerElementsArray = [];
    const biggerElementArray = [];

    while (copiedArray.length) {
        const currentElement = copiedArray.shift();

        if(currentElement === pivitElement) {
            centerElementArray.push(currentElement);
        } else if (currentElement < pivitElement) {
            smallerElementsArray.push(currentElement);
        }else {
            biggerElementArray.push(currentElement);
        }
    }

    const smallerElementsSortedArray = quickSort(smallerElementsArray);
    const biggerElementsSortedArray = quickSort(biggerElementArray);


    return smallerElementsSortedArray.concat(centerElementArray, biggerElementsSortedArray);
}

// const sortedArray = quickSort([-3, 10, 1, 100, -3, -10, 22, 15]);
const sortedArray = quickSort([-3, 10, -3, -15]);

console.log('sortedArray:', sortedArray);
