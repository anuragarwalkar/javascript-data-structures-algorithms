// function statement also know as function declaration
function a() {
  console.log("It is a function statement");
}

// function exporession
var b = function () {
  console.log("It is called function expression");
};

// Anonymous function (function without name) && IIFE (Immediately invoked function expression)
(function () {})();

// Named function expression
var c = function xyz() {
  console.log("It is called named function expression");
};

// Diffrence between parameters & Arguments ?
const callMe = (parameter1, parameter2) => {
  console.log("parameters: ", parameter1, parameter2);
};

callMe("Argument1", "Argument2");

// First class functions || First class citizens (Ability to use functions as values)
const callback = () => {
  console.log("call me when you are ready");
};

const firstClassFunctions = (callbackFunc) => {
  callbackFunc();
};

const anotherFirstClassFunction = () => {
  return function () {};
};

firstClassFunctions(callback);

anotherFirstClassFunction();

// Closure example
const button = document.getElementById("myButton");

const clickListner = () => {
  let counter = 0;

  return () => {
    console.log(`Clicked ${++counter}`);
  };
};

button.addEventListener("click", clickListner());
