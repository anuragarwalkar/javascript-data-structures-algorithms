const getDigit = (number, position) => {
    return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

const digitCount = (number) =>{
    if(number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

const mostDigits = (array) =>{
    let mostDigitNumber = 0;
    for(let i = 0; i < array.length; i++){
        const digits = digitCount(array[i]);
        mostDigitNumber = Math.max(digits, mostDigitNumber);
    }

    return mostDigitNumber;
}

const radixSort = (array) => {
    const maxDigits = mostDigits(array);
    let baseTheBucket = Array.from({length: 10}, ()=> []);
    for(let i = 0; i <= maxDigits; i++) {
        console.log('baseTheBucket:', 'start', i)
        for(let j = 0; j < array.length; j++){
           const digitPosition =  getDigit(array[j], i);
           baseTheBucket[digitPosition].push(array[j]);
        }

        array = [...baseTheBucket.flat()];
        baseTheBucket = Array.from({length: 10}, ()=> []);
    }

    return array;
}

// Using empty array ES6 way

// const radixSort = (array) => {
//     const maxDigits = mostDigits(array);
//     let baseTheBucket = [];
//     for(let i = 0; i <= maxDigits; i++) {
//         console.log('baseTheBucket:', 'start', i)
//         for(let j = 0; j < array.length; j++){
//            const digitPosition =  getDigit(array[j], i);
//            baseTheBucket[digitPosition] = 
//            baseTheBucket[digitPosition] ? [...baseTheBucket[digitPosition], array[j]] : [array[j]];
//         }
//         array = [...baseTheBucket.flat()];
//         baseTheBucket = [];
//     }

//     return array;
// }

// const getDigit = (number, position) => {
//     let length = null;

//     if(typeof number === 'number'){
//         length = number.toString().length - 1;
//     }else{
//         length = number.length - 1;
//     }

//     if(position <= length){
//         const index = Math.abs(position - length);
//         const getPosition = number.toString()[index];
//         return parseInt(getPosition);
//     }
//     return 0;
// }

const result = radixSort([8000, 400, 200, 500, 100, 5, 6]);

console.log('result:', result)
const getDigit = (number, position) => {
    return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

const digitCount = (number) =>{
    if(number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

const mostDigits = (array) =>{
    let mostDigitNumber = 0;
    for(let i = 0; i < array.length; i++){
        const digits = digitCount(array[i]);
        mostDigitNumber = Math.max(digits, mostDigitNumber);
    }

    return mostDigitNumber;
}

const radixSort = (array) => {
    const maxDigits = mostDigits(array);
    let baseTheBucket = Array.from({length: 10}, ()=> []);
    for(let i = 0; i <= maxDigits; i++) {
        console.log('baseTheBucket:', 'start', i)
        for(let j = 0; j < array.length; j++){
           const digitPosition =  getDigit(array[j], i);
           baseTheBucket[digitPosition].push(array[j]);
        }

        array = [...baseTheBucket.flat()];
        baseTheBucket = Array.from({length: 10}, ()=> []);
    }

    return array;
}

// Using empty array ES6 way

// const radixSort = (array) => {
//     const maxDigits = mostDigits(array);
//     let baseTheBucket = [];
//     for(let i = 0; i <= maxDigits; i++) {
//         console.log('baseTheBucket:', 'start', i)
//         for(let j = 0; j < array.length; j++){
//            const digitPosition =  getDigit(array[j], i);
//            baseTheBucket[digitPosition] = 
//            baseTheBucket[digitPosition] ? [...baseTheBucket[digitPosition], array[j]] : [array[j]];
//         }
//         array = [...baseTheBucket.flat()];
//         baseTheBucket = [];
//     }

//     return array;
// }

// const getDigit = (number, position) => {
//     let length = null;

//     if(typeof number === 'number'){
//         length = number.toString().length - 1;
//     }else{
//         length = number.length - 1;
//     }

//     if(position <= length){
//         const index = Math.abs(position - length);
//         const getPosition = number.toString()[index];
//         return parseInt(getPosition);
//     }
//     return 0;
// }

const result = radixSort([8000, 400, 200, 500, 100, 5, 6]);

console.log('result:', result)
