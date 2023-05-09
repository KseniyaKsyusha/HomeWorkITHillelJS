const n = Math.floor(Math.random() * 100) + 2;

let squareNum;
const dollarPrice = 27;

// 1
let str = "1) ";
for (let i = 20; i <= 30; i += 0.5) {
  str += `${i} `;
}
console.log(str);

// 2
str = "2) ";
for (let i = 10; i <= 100; i += 10) {
  str += `${dollarPrice * i} `;
}
console.log(str);

//3
str = `3) ${n}: `;
for (let i = 1; i <= 100; i++) {
  squareNum = i ** 2;
  if (squareNum >= n) break;
  str += `${i} => ${squareNum}; `;
}
console.log(str);

// 4
str = `4) ${n}: `;
let flag = 0;

for (let i = 2; i <= n; i++) {
  flag = 1;
  for (let j = 2; j < i / 2; j++) {
    if (i % j === 0) {
      flag = 0;
      break;
    }
  }
  if (flag == 1) {
    str += `${i} `;
  }
}
console.log(str);

// 5
console.log(`5) ${n}:`);
while (n % 3 == 0) {
  n /= 3;
}
console.log(
  n == 1
    ? `це число можна отримати шляхом зведення числа 3 у деякий ступінь `
    : `це число не можна отримати шляхом зведення числа 3 у деякий ступінь `
);
