function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

function Human() {}

Human.prototype.type = "last";

Person.prototype = Object.create(Human.prototype);

let p1 = new Person("anruag", "arwalkar");

class Engine {
  getName() {
    return "4 Cylender";
  }
}

class Car extends Engine {}

console.log(new Car().__proto__ === Car.prototype);
