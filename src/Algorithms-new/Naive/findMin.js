const findMin = (array) => {
    let [min] = array;
    for (const item of array) {
        if (item < min) {
            min = item;
        }
    }

    return min;
}

const isEven = (number) => {
    return number % 2 === 0;
}


let result = findMin([5, 2, 3, 4]);

result = isEven(87)

console.log('result:', result)