const result = [];

const getSumBy = (i) => {
    const splitResult = i.toString().split('');

    if (!splitResult.find(n => n === '8')) {
        return splitResult.reduce((a, b) => a + parseInt(b), 0)
    }

    return -1;
};

for (let i = 6025; i <= 9999; i++) {
    const first = getSumBy(i);
    if (first !== -1) {
        const second = getSumBy(first);
        if (second === 9) {
            result.push(i);
        }
    }
}