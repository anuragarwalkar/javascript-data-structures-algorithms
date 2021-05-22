let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  const cloned = JSON.parse(JSON.stringify(obj));
  const helperStringifyNum = (clonedObj) => {
    for (const key in clonedObj) {
      if (typeof clonedObj[key] === "object") {
        helperStringifyNum(clonedObj[key]);
      }

      if (typeof clonedObj[key] === "number") {
        clonedObj[key] = clonedObj[key].toString();
      }
    }
    return clonedObj;
  };

  return helperStringifyNum(cloned);
}

const result = stringifyNumbers(obj);

console.log(result);
