const menu = ["Burger", "Fries", "Pizza", "Pasta"];

let testCases = [
  {
    value: "burgerfries",
    expected: "Burger Fries",
  },
  {
    value: "burgerfriesburger",
    expected: "Burger Burger Fries",
  },
];

function menusplitter(value) {
  const result = [];

  for (let j = 0; j < value.length; j++) {
    const res = menu.find((item) => value.includes(item.toLowerCase()));

    if (res) {
      value = value.replace(res.toLowerCase(), "");
    }

    result.push(res);
  }

  return result.join(" ");
}

const res = menusplitter("burgerfriesburger");

console.log("res:", res);
