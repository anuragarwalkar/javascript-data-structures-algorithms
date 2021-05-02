const cource = {
  title: "anurag",
};

Reflect.setPrototypeOf(cource, {
  toString() {
    return this.title;
  },
});

Reflect.defineProperty(cource, "price", {});

console.log(cource);
