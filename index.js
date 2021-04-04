const uid = Symbol("uid");

console.log(Symbol);

const user = {
  [uid]: uid,
  name: "max",
  age: 30,
};

console.log(user);
