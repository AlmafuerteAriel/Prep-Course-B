// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  var acumulador = 0;
  for (var i = 1; i < 11; i++) {
    acumulador = acumulador + i;
  }
  return acumulador;
}

function encuentraPares(array) {
  // [ 2, 3, 4, 5]
  //   ^0 < array.length = 4
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var resultado = [];
  var indice = 0;
  while (indice < array.length) {
    if (array[indice] % 2 === 0) {
      resultado.push(array[indice]);
    }
    indice++;
  }
  return resultado;
}

function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  // [ 2, 3, 4, 5]
  // [ 4, 9, 16, 25] ^
  var alCuadrado = function (num) {
    return Math.pow(num, 2);
  };
  var resultado = array.map(alCuadrado);
  return resultado;
}

function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  // [1, 2, 3]
  //           ^
  var resultado = array.reduce(function (acumulador, num) {
    return acumulador + num;
  }, 0);
  return resultado;
}

function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  // 100 -> 3
  // 100 + a -> "100a"
  // 100 + "" -> "100"
  var numeroAString = num + "";
  return numeroAString.length;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos,
};
