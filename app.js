function sum(a, b) {
  return a + b;
}
function saluda(name) {
  return console.log(`Hola ${name}`);
}
function longitud(str) {
  //let str = []
  return str.length;
}

console.log(longitud(`hola`), 1);

// Tu misión en este reto es crear una función llamada isAlive que reciba dos argumentos llamados playerName y points

// isAlive debe retornar verdadero si playerName es igual a "ikk" y points es mayor a 30,
//  o si playerName es igual a "gut" y points es mayor a 10. De lo contrario, debe retornar falso.

function isAlive(playerName, points) {
  let alive = false;
  if (
    (playerName === "ikk" && points > 30) ||
    (playerName === "gut" && points > 10)
  ) {
    alive = true;
  }
  return alive;
}

console.log(
  isAlive("ikk", 31),
  isAlive("ikk", 28),
  isAlive("gut", 11),
  isAlive("gut", 9)
);

function fizzBuzz(s) {
  let fb;
  if (s % 3 === 0 && s % 5 === 0) {
    fb = "fizzbuzz";
  } else if (s % 3 === 0) {
    fb = "fizz";
  } else if (s % 5 === 0) {
    fb = "buzz";
  } else {
    fb = s;
  }
  return fb;
}
const arr = [1, 3, 5, 15, 19];
//otra opcion
const fizzBuzz2 = (numero) => {
  return numero % 5 === 0 && numero % 3 === 0
    ? "fizzbuzz"
    : numero % 3 === 0
    ? "fizz"
    : numero % 5 === 0
    ? "buzz"
    : numero;
};

console.log(arr.forEach((s) => console.log(fizzBuzz(s))));
