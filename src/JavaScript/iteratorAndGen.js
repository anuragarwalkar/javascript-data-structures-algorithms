const company = {
  employees: ["Max", "Manu", "Annan"],
  next() {
    if (this.currentEmployee >= this.employees.length) {
      return { value: this.currentEmployee, done: true };
    }
    const returnedValue = {
      value: this.employees[this.currentEmployee],
      done: false,
    };
    this.currentEmployee++;
    return returnedValue;
  },
  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

for (const iterator of company) {
  console.log(iterator);
}
