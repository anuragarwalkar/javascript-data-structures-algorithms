// filter items
const items = ['asas', null, "", undefined];

// return most frequest item
const mostFrequentItem = [1, 'a', 2, 2, 3, 4, 'a', 5, 'a', 'u', 'a', 'a'];

// Remove duplicates from array
const nums = [1, 2, 2, 3];

// Flattern 2D Array
const twoDimentionalArray = [[1, 2, 3], [4, 5]];

// console.log(twoDimentionalArray.reduce((a, b) => a.concat(b), []))

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
    length: 1,
    getItems: function() {
        arguments[0]()
    }
}

x.getItems(y, 2);

// Tell me the output
console.log(5 < 6 < 7);

console.log(7 > 6 > 5);

// Tell me the output
console.log(2 + '2');

console.log(2 - '2');

function getRandomString() {
    var char = 'ABCDEFG';
    var numbers = '1234';
    var special = '@#$%!';

    var text = "";

    var vars = [char, numbers, special];
    for(var i = 0; i < 5; i++) {
        const result = vars[Math.floor(Math.random() * vars.length)]
        text += result[Math.floor(Math.random() * result.length)]
        // [Math.floor(Math.random() * char.length)];
    }

    return text;
}

const result = getRandomString();

console.log('result:', result)





function Memo() {
    this.obj = {};  
}

Memo.prototype.isPrime = isPrime;

function isPrime (number) {

    if(this.obj[number] !== undefined) {
        console.log('this.obj[number]:', this.obj[number])
        return this.obj[number];
    }

    let isPrime = true;

    if (number < 2) {
        return false;
    }

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrime = false
        }
    }
    this.obj[number] = isPrime;
    return isPrime
}


const memo = new Memo();
const result = memo.isPrime(100);
const another = memo.isPrime(100);

console.log('result:', result)



