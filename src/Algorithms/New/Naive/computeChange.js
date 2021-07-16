const computeChange = (notes, amount) => {
    const computeResult = {notes: {}, totalNotes: 0};
    let remainingAmount = amount;

    for (const note of notes) {
        if (note <= remainingAmount) {
            const many = Math.floor(remainingAmount / note);
            computeResult.notes[note] = many;
            computeResult.totalNotes += many;
            remainingAmount -= note * many;
        }
    }

    return computeResult;
}

// const notes = [8, 6, 5, 1];
// const notes = [2000, 500, 200, 100, 50, 100, 50, 20, 10 ,5 , 2 , 1];

// const result = computeChange(notes, 11);

// console.log('result:', result);


module.exports = computeChange;