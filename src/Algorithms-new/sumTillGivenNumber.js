const { performance } = require('perf_hooks');

const start = performance.now();

// const sumUp = (val) => {
//     let sum = 0;
    
//     for(let i= 0; i <= val; i++) {
//         sum += i;
//     }
    
//     return sum;
// }

const sumUp = (val) => {
    return (val / 2) * (1 + val);
}

const result = sumUp(100);

const end = performance.now();

console.log('result:', result,end - start)