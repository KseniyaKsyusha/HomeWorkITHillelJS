"use strict";
class SuperMath {
  constructor(object) {
    
    this.object = object;
  }

  check(newObject = this.object) {
    let result;
    if (confirm(`Calculate:  ${newObject.x}${newObject.sign}${newObject.y}?`)) {
      switch (newObject.sign) {
        case "+":
          result = newObject.x + newObject.y;
          alert(`${newObject.x} + ${newObject.y} = ${result}`);
          break;

        case "-":
          result = newObject.x - newObject.y;
          alert(`${newObject.x} - ${newObject.y} = ${result}`);
          break;

        case "*":
          result = newObject.x * newObject.y;
          alert(`${newObject.x} * ${newObject.y} = ${result}`);
          break;

        case "/":
          if (newObject.y == 0) {
            alert("Dividing by zero is not allowed!");
          } else {
            result = newObject.x / newObject.y;
            alert(`${newObject.x} / ${newObject.y} = ${result}`);
          }
          break;

        case "%":
          result = newObject.x % newObject.y;
          alert(`${newObject.x} % ${newObject.y} = ${result}`);
          break;

        default:
          alert("Error!!!");
          break;
      }
    } else {
      this.input();
    }
  }

  input() {
    const newUserObject = {};
    let inputX;
    let inputY;
    let inputSign;
    
    do {
      if (!isNaN(inputX = +prompt("Input 'x'",6))) {
        newUserObject.x = inputX;
      }
    } while (!("x" in newUserObject));

    do {
       if (!isNaN((inputY = +prompt("Input 'y'",6)))) {
         newUserObject.y = inputY;
       } 
     } while (!("y" in newUserObject));

    do {
      inputSign = prompt("Input 'sign'(+,-,*,/,%)","+");
      if (inputSign.match(/^[\/\+\%\*\-]$/)) {
        newUserObject.sign = inputSign;
      } 
    } while (!("sign" in newUserObject));
    
    this.check(newUserObject);
  }
}

const calc = new SuperMath();
calc.check({x:4, y:4, sign:"+"});

