const sumGivenNumber = (array) => {
    return array.reduce((a, b) => a + b, 0);
}


const result = sumGivenNumber([1, 2, 3, 4]);

console.log('result:', result)