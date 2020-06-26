function findRotatedIndex(array, val){
    // add whatever parameters you deem necessary - good luck!

    let min = 0;
    let max = array.length - 1;

    while(max >= min) {
        let mid = Math.floor((min + max) / 2);

        if(array[mid - 1] === val){
            return mid - 1;
        }

        if(array[mid] === val){
            return mid
        }else if(array[mid] > val && array[mid + 1] > val){
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }

    return -1;
}

const result = findRotatedIndex([37, 44, 66, 102, 10, 22], 10);

console.log('result:', result);