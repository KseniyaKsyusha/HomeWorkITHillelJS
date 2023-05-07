const operationArea = ["add", "sub", "mult", "div"];

while (
  !operationArea.includes(
    (operation = prompt("Введіть, що ви хоче зробити (add, sub, mult, div):"))
  )
) {
  console.log("Erroneous operation!!!!");
}

while (isNaN((number1 = +prompt("Enter the first number:")))) {
  console.log("Not a number!!");
}
while (isNaN((number2 = +prompt("Enter the second number:")))) {
  console.log("Not a number!!");
}

switch (operation) {
  case "add":
    console.log(`${number1} + ${number2} = ${number1 + number2}`);
    break;
  case "sub":
    console.log(`${number1} - ${number2} = ${number1 - number2}`);
    break;
  case "mult":
    console.log(`${number1} * ${number2} = ${number1 * number2}`);
    break;
  case "div":
    console.log(
      number2 === 0
        ? `division by zero!!!!`
        : `${number1} / ${number2} = ${number1 / number2}`
    );
    break;
}
