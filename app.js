function factorial(n = 1) {
  let nFactorial = 1;
  for (let i = 0; i < n - 1; i++) {
    nFactorial = (n - i) * nFactorial;
  }
  return nFactorial;
}

//console.log(factorial(5));

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

const transform = function (arr, fun) {
  const copyItems = [];
  arr.forEach((arr) => {
    copyItems.push(fun(arr));
  });
  return copyItems;
};
var duplicate = function (i) {
  return i * 2;
};
print1 = transform([1, 2, 3], duplicate); // => [2, 4, 6]

var increase = function (i) {
  return i + 10;
};
print2 = transform([1, 2, 3], increase); // => [11, 12, 13]
//console.log(print1, print2);

const filter = function (arr, fun) {
  const copyItems = [];
  arr.forEach((arr) => {
    if (fun(arr)) {
      copyItems.push(arr);
    }
  });
  return copyItems;
};

var even = function (i) {
  return i % 2 === 0;
};
let print3 = filter([1, 2, 3, 4], even); // => [2, 4]

var none = function (i) {
  return false;
};
let print4 = filter([1, 2, 3, 4], none); // => []
//console.log(print3, print4);

//-------------------Compose-----------------------
const compose = function (fun1, fun2) {
  return fun2(fun1());
};
const greet = function () {
  return "Bienvenidos";
};
const yell = function (str) {
  return str.toUpperCase() + "!";
};
let print5 = compose(greet, yell); // => BIENVENIDOS!

const generate = function () {
  return 2;
};
const square = function (x) {
  return x * x;
};
let print6 = compose(generate, square); // => 4
//console.log(print5, print6);
//-----------countby
function countBy(x, n) {
  let z = [];
  for (let i = 1; i < n + 1; i++) {
    z.push(x * i);
  }
  return z;
}
//console.log(countBy(1, 10), countBy(2, 5), "si");
//--------------powersOfTwo
function powersOfTwo(n) {
  const arr = [];
  for (let i = 0; i < n + 1; i++) {
    arr.push(2 ** i);
  }
  return arr;
}
//console.log(powersOfTwo(0), powersOfTwo(5));
//--------------countSheep
const countSheeps = function (arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element === true) {
      count++;
    }
  });
  return count;
};
//---------------order
const order = function (arr, reverse) {
  if (reverse === true) {
    arr = arr.sort(function (a, b) {
      return b - a;
    });
    return arr;
  } else {
    arr = arr.sort(function (a, b) {
      return a - b;
    });
    return arr;
  }
};
// console.log(
//   order([1, 2, 3, 8], true), //=> [3, 2, 1]
//   order([5, 2, 10, 3, 4]),
//   order([25, 10, 1, 1, 5, 14], true)
// );
// contains 1-3 in first digit RegExp
let x = [123, 248, 8, 321, 9453];
let expReg = /[1-3]/;

function validateCode(code) {
  return /^[123]/.test(code);
}
// x.forEach((e) => {
//   console.log(validateCode(e));
// });
//-------map function
function maps(x) {
  return x.map((n) => n * 2);
}
//console.log(maps(x));
//------------Reversed sequence
const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  arr.push();
  return arr;
};
const reverseSeq1 = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
}; // alternate solution
console.log(reverseSeq1(12));
