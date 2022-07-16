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
let expReg = /^[1-3]/;

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
//console.log(reverseSeq1(12));
//-----------Point calculator
function points(games) {
  let points = 0;
  games.forEach((element) => {
    const x = /^[0-9]/;
    const y = /:\d/;
    let val = [
      x.exec(element).toString(),
      y.exec(element).toString().replace(":", ""),
    ];
    val = [parseInt(val[0]), parseInt(val[1])];
    if (val[0] > val[1]) {
      points = points + 3;
    } else if (val[1] == val[0]) {
      points++;
    }
  });
  return points;
}
const points1 = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
//Test logs
// const games = ["3:1", "2:2", "0:1"];
// console.log(`Puntos de Equipo 1: ${points(games)}`);
//------getCount---- codewars kata
function getCount(str) {
  const re = /[a,e,i,o,u]/g;
  return ((str || "").match(re) || []).length;
}
//testing logs
// console.log(getCount("murcielago"), 5);
// const str = "murcielago";
// const r = /[a,e,i,o,u]/;
// const count = (str) => {
//   const re = /[a,e,i,o,u]/g;
//   return ((str || "").match(re) || []).length;
// };
// console.log(count(str), getCount(str));
function filterLongWords(sentence = "", n = Infinity) {
  const re = `\\b\\w{${n},}`; // matches all words that have length 4 or more for strictly 4 clse with \b at the end
  const regex = new RegExp(`[^ ]{${n + 1},}`, "g"); //`\\b\\w{${n + 1},}`
  //console.log(sentence.match(regex), regex);
  return sentence.match(regex) === null ? [] : sentence.match(regex);
}

// console.log(
//   filterLongWords(
//     "The quick brown fox jumps! over() the lazy() dog filter_long_words()",
//     4
//   ),
//   filterLongWords("The quick brown fox jumps over the lazy dog")
// );
//----------friend-----------------------
// in array of strings, friends are 4 letter strings, return a array of friends
function friend(friends = "") {
  const arr = [];
  friends.forEach((e) => {
    if (/^\w{4}$/.test(e)) {
      arr.push(e);
    }
  });
  return arr;
}
// console.log(
//   friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
//   ["Jimm", "Cari", "aret"]
// );
// console.log(friend(["Ryan", "Cool Man"]), ["Ryan"]);

// function reverseWords(str) {
//   str = str.split(" ");
//   const sol = [];
//   str.forEach((e) => {
//     sol.push(e.split("").reverse());
//   });
//   return sol.join("").replace(",", " ");
// }
// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

function mxdiflg(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2)) {
    return -1;
  }
  const mapx = a1.map((x) => x.length);
  const mapy = a2.map((x) => x.length);
  const x = [Math.max(...mapx), Math.min(...mapx)];
  const y = [Math.max(...mapy), Math.min(...mapx)];
  const yBig = Math.abs(x[1] - y[0]);
  const xBig = Math.abs(x[0] - y[1]);
  return yBig > xBig ? yBig : xBig;
}
// const s1 = [
//   "hoqq",
//   "bbllkw",
//   "oox",
//   "ejjuyyy",
//   "plmiis",
//   "xxxzgpsssa",
//   "xxwwkktt",
//   "znnnnfqknaz",
//   "qqquuhii",
//   "dvvvwz",
// ];
// const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
// console.log(mxdiflg(s1, s2), 13);

var countSheep = function (num) {
  let sheepCount = "";
  const template = " sheep...";
  for (let i = 0; i < num; i++) {
    sheepCount = `${sheepCount}${i + 1}${template}`;
  }
  return sheepCount;
};
//console.log(countSheep(3));
//countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
// alternate solution

function palindrome(num) {
  if (typeof num === "string" || !/^[\d]{1,}$/g.test(num)) {
    return "Not valid";
  }
  let reverseNum = parseInt(`${num}`.split("").reverse().join(""));
  return num === reverseNum ? true : false;
}
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) return false;
  const cDate = new Date(currentDate);
  const eDate = new Date(expirationDate);
  return cDate <= eDate ? true : false;
}
//alternate
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }
//recursive count function
var co = 1;
const count = function counter() {
  return co++;
};

// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3

const number = function (arr) {
  var a = 1;
  const returntArr = [];
  arr.forEach((e) => {
    returntArr.push(`${a}: ${e}`);
    a++;
  });
  return returntArr;
};
//console.log(number(["a", "b", "c", "a"]), ["a", "b", "c", "a"]);
function rowSumOddNumbers(n) {
  let n0 = 1;
  let sumVal = 0;
  for (let i = 0; i < n; i++) {
    n0 += 2 * i;
  }
  for (let ip = 0; ip < n; ip++) {
    sumVal += n0 + 2 * ip;
  }
  return sumVal;
}
//console.log(rowSumOddNumbers(4));
//alternate solution, failed to realize the answer is n to the power of 3
// function rowSumOddNumbers(n) {
//   return n > 0 ? n * n * n : "Wrong Input"
// }
const flatten = (arr) => [].concat(...arr);
//console.log(flatten([[1], [2, 3], 4]));

function counter() {
  var count = 0;

  return function () {
    return ++count;
  };
}
//console.log(counter());

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
//console.log(disemvowel("murcielago"));

function gimme(triplet) {
  let tri = [...triplet];
  tri = tri.sort((a, b) => a - b);
  return triplet.indexOf(tri[1]);
}
//console.log(gimme([1, 3, 2]));
//function gimme(a) { // alternative
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }

function removeUrlAnchor(url) {
  return url.replace(/#.+$/, "");
}
function minMax(arr = []) {
  const r = [];
  r.push(Math.min(...arr));
  r.push(Math.max(...arr));
  return r;
}
// alternate solution
// function minMax(arr) {
//   return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
// }
function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
//console.log(descendingOrder(16544));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  console.log(`entro`);

  for (let i = 0; i <= nums.length; i++) {
    for (let x = 0; x <= nums.length; x++) {
      if (x !== i && nums[i] + nums[x] === target) {
        return [i, x];
      }
    }
  }
  return [0, 0];
};
//console.log(twoSum([3, 2, 4], 6));

const repeater = (string = "", n = 0) => string.repeat(n);
// console.log(repeater("hola", 3));
// console.log(repeater("adios", 1));

function User(name = "", email = "") {
  (this.name = name), (this.email = email);
}

const user = new User("Juan", "juan@makeitreal.camp");
//console.log(user.name, user.email);

function Square(w, h) {
  (this.width = w),
    (this.height = h),
    (this.calculateArea = function () {
      return this.width * this.height;
    });
}
const square1 = new Square(50, 60);
// console.log(
//   square1.width, // => 50
//   square1.height, // => 60
//   square1.calculateArea()
// );
// altrnativa usando prototype
// var Square = function(width, height) {
//   this.width = width;
//   this.height = height;
// };

// Square.prototype.calculateArea = function() {
//   return this.width * this.height;
// };

function Car() {
  this.velocity = 0;
}
Car.prototype.accelerate = function (amount) {
  this.velocity += amount || 1;
  return this;
};
Car.prototype.break = function (amount) {
  this.velocity -= amount || 1;
  return this;
};

class Bus extends Car {
  constructor() {
    super();
    this.beep = function () {
      return "BEEP!";
    };
  }
}

//    alternativa
// function Bus() {
//   Car.call(this);
// }
// Bus.prototype = new Car();
// Bus.prototype.beep = function() {
//  return "BEEP!"
// };
// var bus = new Bus();
// console.log(
//   bus.velocity, // => 0
//   bus.accelerate(),
//   bus.velocity, // => 1
//   bus.accelerate(2),
//   bus.velocity, // => 3
//   bus.break(),
//   bus.velocity, // => 2
//   bus.break(2),
//   bus.velocity, // => 0
//   bus.beep()
// ); // => "BEEP!"

function maximo(...args) {
  return Math.max(...args);
}
function minimo(...args) {
  return Math.min(...args);
}
// console.log(
//   maximo(5, 10, 20, 50, 32), //=> 50
//   minimo(3, 44, 2, 8)
// ); //=> 2
const isPlate = (str) => /[A-Z]{3}\d{3}/.test(str);

function split(str) {
  return str.split(/[*+-]/g);
}
// console.log(
//   split("Hola+Mundo"), // => ["Hola", "Mundo"]
//   split("partir-la-cadena"), // => ["partir", "la", "cadena"]
//   split("este-es+otro*ejemplo"), // => ["este", "es", "otro", "ejemplo"]
//   split("")
// ); // => [""]);

//const plates = (str) => str.match(/[A-Z]{3}[0-9]{3}/g) ?? [];
const plates = function (str) {
  if (str.match(/[A-Z]{3}\d{3}/g) === null) {
    return [];
  }
  return str.match(/[A-Z]{3}\d{3}/g);
};
// console.log(
//   plates("AAA123"), // => ["AAA123"]
//   plates("Iba en un AAA123 y después en un BBB987"), //=> ["AAA123", "BBB987"]
//   plates("no coincide")
// );

function template(str, obj) {
  const key = str.match(/(?<=\[)\w+(?=\])/g);
  if (!key ?? true) {
    return str;
  }
  let sol = str;
  for (let i = 0; i < key.length; i++) {
    const regex = new RegExp(`\\[${key[i]}\\]`, "g");
    sol = sol.replace(regex, obj[key[i]]);
  }
  return sol;
}
// console.log(
//   template("Hola [nombre]", { nombre: "German" }), // => "Hola German"
//   template("Hola [nombre], tu saldo es [saldo]", {
//     nombre: "German",
//     saldo: 12000,
//   }), // => "Hola German, tu saldo es 12000"
//   template("Hola mundo", {}) // => "Hola mundo"
// );

//Step 1 is done
function changer(str) {
  let modified = "";
  for (let i = 0; i < str.length; i++) {
    str.replace(str[i], function (a) {
      let c = a.charCodeAt(0);
      if (c <= 64 || c >= 123) return (modified += a);
      switch (c) {
        case 90:
          return (modified += "A");
        case 122:
          return (modified += "a");
        default:
          return (modified += String.fromCharCode(1 + c));
      }
    });
  }
  modified = modified
    .toLowerCase()
    .replace(/[aeiou]/g, (w) => w.replace(/\w/, (c) => c.toUpperCase()));
  return modified;
}
//console.log(`'${changer("1SD3FaZ bcz ")}'`);

function duplicateEncode(word) {
  let regex;
  let acc = word;
  word.split("").forEach((letter) => {
    regex = new RegExp(`[^()][${letter}]{1}`, "gi");
    word.match(regex) > 1
      ? (acc = acc.replace(regex, ")"))
      : (acc = acc.replace(regex, "("));
    console.log(acc);
  });
  //regex2 = new RegExp(`[${letter}]`, "gi");
  // console.log(`[${acc.join("")}]`);
  // word.replace(regex, "(");
  // word.replace(/[^)]./gi, ")");
  return acc;
}
function getCount(str) {
  const re = /[a,e,i,o,u]/g;
  return ((str || "").match(re) || []).length;
}

//console.log(duplicateEncode(`Holaaa`));

function solution(str, ending) {
  const regex = new RegExp(`${ending}$`);
  return str.match(regex) ? true : false;
}
// console.log(solution("abcde", "cde"), solution("abcde", "abc"));

function getTheVowels(word) {
  let count = 0;
  const order = ["a", "e", "i", "o", "u", "a"];
  const vowels = word.match(/[aeiou]/g);
  // console.log(vowels);
  let aux = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === order[aux]) {
      // console.log(count, aux, i, vowels[i], order[aux]);
      count++;
      aux++;
      // console.log(count, aux, i, vowels[i], order[aux]);
    }
    if (aux === 5) {
      aux = 0;
    }
  }
  return count;
}
// const s = "akfheujfkgiaaaofmmfkdfuaiiie";
// console.log(getTheVowels(s), 7);

function squareDigits(num) {
  const str = num.toString().split("");
  const output = str.map((n) => n ** 2).join("");
  return parseInt(output);
}
// console.log(squareDigits(9119));

function rank(st = "", we, n) {
  if (st === "") return "No participants";
  const names = st.split(",");
  if (names.length < n) return "Not enough participants";

  function letterScore(letter = "") {
    const ascii = letter.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      return ascii - 64;
    } else if (ascii >= 97 && ascii <= 123) {
      return ascii - 96;
    }
    return 0;
  }
  const score = function (name = []) {
    const foo = (name.reduce = (acc, cur) => acc + letterScore(cur));
    return foo;
  };
  const scores = names.map((name) => {
    name.split("").length + letterScore(name);
  });
  console.log(`scores: ${scores}`);

  const sorted = scores.sort((a, b) => b - a);
  return names[sorted.indexOf(we)];
}
// const names = "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH";
// const weights = [1, 4, 4, 5, 2, 1];
// const n = 4;
// console.log(rank(names, weights, n), "PauL");
// console.log(
//   rank(
//     "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
//     [4, 2, 1, 4, 3, 1, 2],
//     4
//   ),
//   "Benjamin"
// );

function chain(input, fs) {
  // implement the "chain" function
  let currentVal = input;
  for (const fun of fs) {
    console.log(`currentVal: ${currentVal}`, `fun: ${fun}`);

    currentVal = fun(currentVal);
  }
  return currentVal;
}
console.log(chain(1, [Math.sqrt, Math.abs]));
