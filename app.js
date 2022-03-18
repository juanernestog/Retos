function factorial(n = 1) {
  let nFactorial = 1;
  for (let i = 0; i < n - 1; i++) {
    nFactorial = (n - i) * nFactorial;
  }
  return nFactorial;
}

console.log(factorial(5));

//----------------------Sumame ambas opciones sirven

const sumame = function (arr) {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
};
const sumame2 = (arr) => arr.reduce((a, b) => a + b, 0);

//console.log(`${sumame([1, 1, 2, 10])}`);

const promediame = function (arr) {
  if (Array.isArray(arr) && arr.length === 0) {
    return 0;
  }
  return arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length;
};
//console.log(`Solucion ${promediame([])} ${promediame([1, 2, 3, 4])}`);

function reverseWords(str) {
  let s = str.split(" ");
  let sPrime = [];
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    sPrime.push(s[s.length - 1 - i]);
  }
  s = sPrime.join(" ");
  return s; // reverse those words
}

// console.log(`${reverseWords("soy un string de varias palabras")}`);

[Boolean, Number, Array].forEach(
  (obj) =>
    (obj.prototype.toString1 = function () {
      return JSON.stringify(this);
    })
);

// console.log(
//   true.toString1(),
//   false.toString1(),
//   [].toString1() === "[]",
//   [].toString1(),
//   [1].toString1() === "[1]",
//   [1].toString1(),
//   [2, 4, 8, 17].toString1() === "[2,4,8,17]",
//   [2, 4, 8, 17].toString1(),
//   [Math.PI, Math.E].toString1() === "[3.141592653589793,2.718281828459045]",
//   [Math.PI, Math.E].toString1()
// );
