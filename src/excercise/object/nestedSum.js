function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }

    if (typeof obj[key] === "number") {
      if (!(obj[key] % 2)) {
        sum += obj[key];
      }
    }
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const res = nestedEvenSum(obj1); // 6
console.log(res);
// nestedEvenSum(obj2); // 10
