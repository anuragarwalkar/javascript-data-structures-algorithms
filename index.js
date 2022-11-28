const result = [];

const getSumBy = (i) => {
    const splitResult = i.toString().split('');

    if (!splitResult.find(n => n === '8')) {
        return splitResult.reduce((a, b) => a + parseInt(b), 0)
    }

    return -1;
};

for (let i = 6025; i <= 9999; i++) {
    // if (getSumBy(i) === 9) {
    const first = getSumBy(i);
    if (first !== -1) {
        const second = getSumBy(first);
        if (second === 9) {
            result.push(i);
        }
    }
}

function getSum(n) {
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}


console.log('seconds_passed:', result)


// var value = 6102,
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// [
//     6003, 6012, 6021, 6030,
//     6102, 6111, 6120, 6201,
//     6210, 6300, 7002, 7011,
//     7020, 7101, 7110, 7200,
//     8001, 8010, 8100, 9000
//   ]