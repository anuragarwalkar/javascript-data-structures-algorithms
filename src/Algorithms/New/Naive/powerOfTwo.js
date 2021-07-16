// const isPowerOftwo = (number) => {
//     if(number < 1) {
//         return false;
//     }

//     let dividedNumber = number;

//     while(dividedNumber !== 1) {
//         if(dividedNumber % 2 !== 0) {
//             return false;
//         };

//         dividedNumber = dividedNumber / 2; 
//     }

//     return true;
// }

const isPowerOftwo = (number) => {
    if(number < 1) {
        return false;
    }

    return (number & (number - 1)) === 0;
}
const result = isPowerOftwo(10);

console.log('result:', result)