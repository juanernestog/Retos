//Hola Maker,

// Tu misión en este reto es escribir una función llamada adjustText que ajuste un string a una longitud determinada.

// La función debe recibir dos argumentos: un string y un número, que determina la longitud a la que se debe ajustar el string.
// Si la longitud del string es mayor al valor del segundo parámetro, se debe cortar. De lo contrario, se debe completar con espacios.
// La función debe retornar el string ajustado.
const b = "hola";
//console.log(b.charAt(4) === "");

function adjustText(s, n) {
  if (s.charAt(n) === "") {
    for (let i = s.length; i < n; i++) {
      s = s.concat(" ");
    }
    return s;
    //console.log(s);
  } else {
    return s.slice(0, -Math.abs(n - s.length));
  }
}

// Ejemplos:
// adjustText("", 3); //=> "   "
// adjustText("hola", 2); //=> "ho"
// adjustText("Hola", 0); //=> ""
// adjustText("Hola", 10); //=> "Hola      "
console.log(` '${adjustText("", 3)}'
  '${adjustText("hola", 2)}'
  '${adjustText("Hola", 0)}'
  '${adjustText("Hola", 10)}'`);
