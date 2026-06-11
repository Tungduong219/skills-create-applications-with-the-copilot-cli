// Simple calculator functions
function toNumber(n) {
  const num = Number(n);
  if (Number.isNaN(num)) throw new TypeError('Input must be a number');
  return num;
}

function add(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b);
}

function divide(a, b) {
  const denom = toNumber(b);
  if (denom === 0) throw new Error('Division by zero');
  return toNumber(a) / denom;
}

function modulo(a, b) {
  const denom = toNumber(b);
  if (denom === 0) throw new Error('Division by zero');
  return toNumber(a) % denom;
}

function power(base, exponent) {
  return Math.pow(toNumber(base), toNumber(exponent));
}

function squareRoot(n) {
  const val = toNumber(n);
  if (val < 0) throw new Error('Square root of negative number');
  return Math.sqrt(val);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  // Backwards-compatible names expected by some test suites:
  addition: add,
  subtraction: subtract,
  multiplication: multiply,
  division: divide,
};
