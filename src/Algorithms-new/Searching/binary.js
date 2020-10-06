const findElement = (array, findVal) => {
    let startIndex = 0;
    let endIndx = array.length - 1;
    
    while(startIndex <= endIndx) {
        let middleIndex = startIndex + Math.floor((endIndx - startIndex) / 2);

        if(array[middleIndex] === findVal) {
            return middleIndex;
        }else {
            if(array[middleIndex] > findVal) {
                endIndx = middleIndex - 1;
            }else {
                startIndex = middleIndex + 1;
            }
        }
    }

}

const array = [1, 4, 5, 6, 10, 100];

const result = findElement(array, 100);

console.log('result:', result)