const findElement = (array, item, offset) => {
    if(array.length === 0) {
        return null;
    }

    let startIndex = 0;
    let endIndex = array.length;
    let middleIndex = Math.floor((endIndex - startIndex) / 2);

    if (item === array[middleIndex]) {
        return middleIndex + offset;
    }

    if (array[middleIndex] < item) {
        startIndex = middleIndex + 1;
        offset+= startIndex; 
    }else {
        endIndex = middleIndex;
    }

    return findElement(array.slice(startIndex, endIndex), item, offset)
}

const array = [1, 4, 5, 6, 10, 100];

const result = findElement(array, 10, 0);

console.log('result:', result)
