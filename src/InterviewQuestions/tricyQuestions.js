let a = true;

setTimeout(() => {
  a = false;
}, 2000);

// What will happen
setInterval(() => {
  if (a) {
    console.log(a);
  }
}, 200);

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
