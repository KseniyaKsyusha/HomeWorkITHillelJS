const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const n = Math.floor(3+Math.random() * 10) + 2;

function generateKey(...args) {
  let result = "";
  for (let index = 0; index < n; index++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const key = generateKey(n, characters);
console.log(`String result: ${key}`);
console.log(`The length of the resulting string: ${key.length}`);
