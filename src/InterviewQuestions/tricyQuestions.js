// Find minimum number of currency notes and values that sum to given amount
// Input : 800
// Output : Currency  Count
//          500 : 1
//          200 : 1
//          100 : 1

// Input : 2456
// Output : Currency  Count
//          2000 : 1
//          200 : 2
//          50 : 1
//          5 : 1
//          1 : 1

let a = true;

setTimeout(() => {
  a = false;
}, 2000);

// What will happen
setInterval(() => {
  if (a) {
    console.log(a);
  }
}, 0);

// IF i do this what will happen
while (a) {
  console.log("Hello");
}

// Ask how to stop cursor after 2 ms
// assign to variable setInterval and then clear in settimeout
let b = true;
let c = 0;

setTimeout(() => {
  b = false;
}, 2000);

setInterval(() => {
  if (b) {
    console.log("Hello...");
  }
}, 200);

let a = true;

setTimeout(() => {
  a = false;
}, 2000);

let interval = setInterval(() => {
  if (a) {
    console.log("Hello");
  } else {
    clearInterval(interval);
  }
}, 200);
