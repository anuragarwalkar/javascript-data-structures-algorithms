// filter items
const items = ["asas", null, "", undefined];

// Reference vs copy memory******************8
let a = "anurag";
let b = a;
a = "swapnil";
console.log(b);

const a = [1];

const b = a;

a[0] = 2;

console.log(b);

// ***********************************

// return most frequest item
const mostFrequentItem = [1, "a", 2, 2, 3, 4, "a", 5, "a", "u", "a", "a"];

// Remove duplicates from array
const nums = [1, 2, 2, 3];

// Flattern 2D Array
const twoDimentionalArray = [
  [1, 2, 3],
  [4, 5],
];

// console.log(twoDimentionalArray.reduce((a, b) => a.concat(b), []))

//  **************************************************
Promise.resolve().then((res) => {
  setTimeout(() => {
    console.log("4");
  }, 0);
});

Promise.resolve().then((res) => {
  console.log("1");
});

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

//output 3 1 2 4 **********************************

// tell me value of this.length ***************************
function y() {
  console.log("Length", this.length);
}
const x = {
  value: 1000,
  length: 1,
  getItems: function () {
    arguments[0]();
  },
};

x.getItems(y, 1, 2);

// output 3 ***********************************

// Tell me the output and why
console.log(5 < 6 < 7);

console.log(7 > 6 > 5);

// *******************************************

// Tell me the output
console.log(2 + "2");

console.log(2 - "2");

// *****************************************************
function getRandomString() {
  var char = "ABCDEFG";
  var numbers = "1234";
  var special = "@#$%!";

  var text = "";

  var vars = [char, numbers, special];
  for (var i = 0; i < 5; i++) {
    const result = vars[Math.floor(Math.random() * vars.length)];
    text += result[Math.floor(Math.random() * result.length)];
  }

  return text;
}

const result = getRandomString();

console.log("result:", result);
// ***********************************************

function Memo() {
  this.obj = {};
}

Memo.prototype.isPrime = isPrime;

function isPrime(number) {
  if (this.obj[number] !== undefined) {
    return this.obj[number];
  }

  let isPrime = true;

  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  this.obj[number] = isPrime;
  return isPrime;
}

// **************************************************
const sum = (argA) => {
  console.log(argA);
  return (argB) => {
    return argB ? sum(argA + argB) : argA;
  };
};

// console.log(sum(1)(2)(3)....()) *******************;

function a() {
  return "hello";
}

const sentence = a`hi`;

console.log(sentence);

const memo = new Memo();
const result = memo.isPrime(100);
const another = memo.isPrime(100);

console.log("result:", result);

// print x after every second

function x() {
  for (var i = 0; i <= 5; i++) {
    function close(val) {
      setTimeout(() => {
        console.log(val);
      }, i * 1000);
    }

    close(i);
  }
}

x();
