while (isNaN((number = +prompt("Enter the first number:")))) {
  console.log("Not a number!!");
}

while (isNaN((number1 = +prompt("Enter the second number:")))) {
  console.log("Not a number!!");
}
while (isNaN((number2 = +prompt("Enter the third number:")))) {
  console.log("Not a number!!");
}

alert(
  `arithmetic average of three numbers: 
   (${number} + ${number1} + ${number2}) / 3 = ${(number + number1 + number2) / 3 }`
);
