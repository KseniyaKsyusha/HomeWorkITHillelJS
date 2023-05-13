const n = Math.floor(3 + Math.random() * 5) + 2;
let i = 0;
let element;
const arrayNumber = [];
const arraySymbol = [];
do {
  element = prompt(`Add ${n} elements to the array`);
  const validElement = /^(-?[0-9a-zA-Zа-яїєёА-ЯЇЄЁ]+)$/.test(element);
  if (!element) {
    console.log(`The end!`);
    break;
  } else if (!validElement) {
    console.log(`erroneous format ${element}`);
    break;
  }
  if (+element || element == 0) {
    arrayNumber.push(+element);
    arrayNumber.sort((a, b) => a - b);
  } else {
    arraySymbol.push(element);
    arraySymbol.sort();
  }
  console.log(`${i} => ${element} => ${[...arrayNumber, ...arraySymbol]} `);
  i++;
} while (i < n);
const arrayResult = [...arrayNumber, ...arraySymbol];
console.log(`array result: ${arrayResult}`);
const arrayDelete = arrayResult.splice(1, 3);
console.log(`array delete: ${arrayDelete}`);
console.log(`array result: ${arrayResult}`);
