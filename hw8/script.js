function UserException(message) {
  this.message = message;
  this.name = "User Defined Exception: ";
}

function mul(value, exponent) {
  if (value === 0 && exponent < 0) {
    throw new UserException("Division by zero!!!!");
  }

  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return value;
  } else if (exponent > 0) {
    return value * mul(value, --exponent);
  } else {
    return (1 / value) * mul(value, ++exponent);
  }

  return value;
}

try {
  const value = Math.floor(Math.random() * 10);
  const exponent = Math.floor((Math.random() - 0.5) * 20);
  console.log(`${value} to the power of ${exponent}`);
  const result = mul(value, exponent);
  console.log(`Result: ${value} to the power of ${exponent} is equal to => ${result}`);
  const examination = Math.pow(value, exponent);
  console.log(`Examination: ${value} to the power of ${exponent} is equal to => ${examination}`);
} catch (e) {
  console.error(e.name, e.message);
}
