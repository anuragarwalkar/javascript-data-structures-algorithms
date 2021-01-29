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
