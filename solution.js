const result = [];

const getSumBy = (i, condition = false) => {
    const splitResult = i.toString().split(''); // ['6', '0', '3', '0']

    // if below line return false then do reset
    if (!splitResult.find(n => n === '8') || condition) {
        // parseInt is to convert string to number
        return splitResult.reduce((a, b) => a + parseInt(b), 0);
    }

    // 6038
    return -1;
};

// ex 6030
// ex 6038
for (let i = 6025; i <= 9999; i++) {
    const first = getSumBy(i); // 9

    if (first !== -1) {
        const second = getSumBy(first, true);
        if (second === 9) {
            result.push(i);
        }
    }
}