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
