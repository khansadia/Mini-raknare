/* let num1 = parseInt(prompt("Enter a number:"));
let num2 = parseInt(prompt("Enter another number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

if (operator === "+") {
  alert(num1 + " + " + num2 + " = " + (num1 + num2));
} else if (operator === "-") {
  alert(num1 + " - " + num2 + " = " + (num1 - num2));
} else if (operator === "*") {
  alert(num1 + " * " + num2 + " = " + (num1 * num2));
} else if (operator === "/") {
  alert(num1 + " / " + num2 + " = " + (num1 / num2));
} else {
  alert("Invalid operator entered. Please try again.");
} */

let name = prompt("What is your name?");
let num1 = parseInt(prompt("Enter a number:"));
let num2 = parseInt(prompt("Enter another number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

if (operator === "+") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " + " + num2 + " = " + (num1 + num2));
} else if (operator === "-") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " - " + num2 + " = " + (num1 - num2));
} else if (operator === "*") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " * " + num2 + " = " + (num1 * num2));
} else if (operator === "/") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " / " + num2 + " = " + (num1 / num2));
} else {
  alert("Invalid operator entered. Please try again.");
}
alert ("The calculatuins are succesfully completed");
