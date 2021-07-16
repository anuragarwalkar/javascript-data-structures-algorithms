function getPermutations (options, length) {
    const permutations = [];

    if(length === 1) {
        return options.map(option => [option]);
    }

    const partialPermutaitons = getPermutations(options, length - 1);

    for(const option of options) {

        for(const existingPermutation of partialPermutaitons) {
            
            permutations.push([option].concat(existingPermutation));
        }

    }

    return permutations;
}

const digits = [1, 2, 3];
const resultLength = 3;

const result = getPermutations(digits, resultLength);

console.log('result:', result)
