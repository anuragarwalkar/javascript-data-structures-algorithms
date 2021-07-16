const computeChange = require('./src/Algorithms-new/computeChange');

const computeChangeBruteForce = (notes, amount) => {
    const result = { type: [], least: {index: 0, notes: Number.MAX_SAFE_INTEGER} };
    for (let i = 0; i < notes.length; i++) {
        const comRes = computeChange(notes.slice(i), amount);

        let index = 0;
        if (result.least.notes > comRes.totalNotes) {
            index++;
            result.least = {index, notes: comRes.totalNotes};
        }

        result.type.push(comRes);
    }

    return result;
}

const notes = [8, 6, 5, 1];
// const notes = [2000, 500, 200, 100, 50, 100, 50, 20, 10 ,5 , 2 , 1];

const result = computeChangeBruteForce(notes, 11);

console.log('result:', result)