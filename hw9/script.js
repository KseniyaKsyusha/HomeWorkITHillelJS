function sum() {
  let counter = 0;
  return function (value) {
    counter += value;
    return counter;
  };
}

let count = sum();
console.log(count(3));
console.log(count(5));
console.log(count(20));

const addSum = () => {
  let resultSum = 0;
  return (value) => {
    resultSum += value;
    return resultSum;
  };
};

let countArrow = addSum();
console.log(countArrow(3));
console.log(countArrow(5));
console.log(countArrow(20));
