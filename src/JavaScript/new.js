const b = {
  a: {
    b: {
      c: "anurag",
    },
  },
};

const log = "a.b.c";

const path = log.split(".");
let newObj = { ...b };
for (let i = 0; i < path.length; i++) {
  newObj = newObj[path[i]];
}

console.log(newObj);
