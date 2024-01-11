/* // 1. Skapa en prompt som frågar om ett valfritt tal. Spara undan i en variabel. 
let num1 = parseInt(prompt("Enter a number:"));
// 2. Skapa en prompt som frågar om second valfritt tal. Spara undan i en variabel.
let num2 = parseInt(prompt("Enter another number:"));
// 3. Skapa ny en tredje prompt som frågar vilket räknesätt användare vill använda. Det bör framgå att endast +, -, \* och / är möjliga. Denna ska också sparas i en variabel.

let operator = prompt("Enter an operator (+, -, *, /):");

// 4. Skapa en if-else-if check där du checkar de olika alternativen. Till exempel. Om räknesättet är lika med addition, så ska en addition utföras mellan de två talen och en alert ska poppa upp och redovisa resultatet. Är det subtraktion som gäller så ska subtraktion ske mellan talen och så vidare.

if (operator === "+") {
  alert(num1 + " + " + num2 + " = " + (num1 + num2));
  alert('Thank you and see you soon with a new calculation');

} else if (operator === "-") {
  alert(num1 + " - " + num2 + " = " + (num1 - num2));
  alert('Thank you and see you soon with a new calculation');
} else if (operator === "*") {
  alert(num1 + " * " + num2 + " = " + (num1 * num2));
  alert('Thank you and see you soon with a new calculation');
} else if (operator === "/") {
  alert(num1 + " / " + num2 + " = " + (num1 / num2));
  alert ("The calculatuins are succesfully completed");
} else {
  alert("Invalid operator entered. Please try again later.");
} */
// starting with some person's name.
     let name = prompt("What is your name?");
alert('Hello, we will start with chossing two numbers');

// 1. Skapa en prompt som frågar om ett valfritt tal. Spara undan i en variabel.

let num1 = parseInt(prompt("Enter a number:"));
// 2. Skapa en prompt till som frågar om ett annat tal. Spara i en variabe
let num2 = parseInt(prompt("Enter another number:"));

// 3. Skapa ny en tredje prompt som frågar vilket räknesätt användare vill använda. Det bör framgå att endast +, -, \* och / är möjliga. Denna ska också sparas i en variabel.

let operator = prompt("Enter an operator (+, -, *, /):");


// 4. Skapa en if-else-if check där du checkar de olika alternativen. Till exempel. Om räknesättet är lika med addition, så ska en addition utföras mellan de två talen och en alert ska poppa upp och redovisa resultatet. Är det subtraktion som gäller så ska subtraktion ske mellan talen och så vidare.

if (operator === "+") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " + " + num2 + " = " + (num1 + num2));
  alert('Thank you and see you soon with a new calculation');
} else if (operator === "-") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " - " + num2 + " = " + (num1 - num2));
  alert('Thank you and see you soon with a new calculation');
} else if (operator === "*") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " * " + num2 + " = " + (num1 * num2));
  alert('Thank you and see you soon with a new calculation');
} else if (operator === "/") {
  alert("Hello " + name + "! Your calculation is complete. " + num1 + " / " + num2 + " = " + (num1 / num2));
  alert('Thank you and see you soon with a new calculation');
} else {
  alert("Invalid operator entered. Please try again.");
}


