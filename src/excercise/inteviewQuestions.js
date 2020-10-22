// filter items
const items = ['asas', null, "", undefined];

// return most frequest item
const mostFrequentItem = [1, 1, 2, 2, 3, 4, 'a', 5, 'a', 'u', 'a', 'a'];

// Remove duplicates from array
const nums = [1, 2, 2, 3];

// Flattern 2D Array
const twoDimentionalArray = [[1, 2, 3], [4, 5]];

// Console log
console.log(Promise.resolve('1'))

setTimeout(() => {
    console.log('2');
}, 0);

console.log('3');

// tell me value of this.length
function y() {
    console.log('Length', this.length);
}
const x = {
    value: 1000,
    items: 1,
    getItems: function() {
        arguments[0]();
    }
}

x.getItems(y, 2);

// Tell me the output
console.log(5 < 6 < 7);

console.log(5 > 6 > 7);

// Tell me the output
console.log(2 + '2');

console.log(2 - '2');

