/*
  ---------------------
  JUEGO PIEDRA, PAPEL O TIJERAS
  ---------------------
*/

//DECLARAR LAS VARIABLES

// Valores que corresponden a los 3 elementos del juego:
var VALUES = {
  PIEDRA: 0,
  PAPEL: 1,
  TIJERAS: 2
}

// Nombres que corresponden a los valores anteriores para poder imprimir al final el string:
var NAMES = {
  0: "piedra",
  1: "papel",
  2: "tijeras"
}

//FUNCIONES

function game(player01, player02) {
  // Declaramos las variables de los posibles resultados y les damos valor false:
  var player01Wins = false;
  var player02Wins = false;
  var tie = false;

  /*
    Comprobamos por cada una de las posibles apuestas del jugador 1
    cual es la apuesta del jugador 2. En base a esto, cambiamos el valor
    de una de las variables anteriores en función de si gana el jugador 1,
    el 2 o si hay un empate.
  */

  if (player01 == VALUES.PIEDRA) {
    // Apuestas del jugador 2 cuando el jugador 1 apuesta por PIEDRA:
    if (player02 == VALUES.PIEDRA) {
      tie = true;
    } else if (player02 == VALUES.PAPEL) {
      player02Wins = true;
    } else if (player02 == VALUES.TIJERAS) {
      player01Wins = true;
    } else {
      console.log("Valor jugador 2 inválido");
    }
  } else if (player01 == VALUES.PAPEL) {
    // Apuestas del jugador 2 cuando el jugador 1 apuesta por PAPEL:
    if (player02 == VALUES.PIEDRA) {
      player01Wins = true;
    } else if (player02 == VALUES.PAPEL) {
      tie = true;
    } else if (player02 == VALUES.TIJERAS) {
      player02Wins = true;
    } else {
      console.log("Valor jugador 2 inválido");
    }
  } else if (player01 == VALUES.TIJERAS) {
    // Apuestas del jugador 2 cuando el jugador 1 apuesta por TIJERAS:
    if (player02 == VALUES.PIEDRA) {
      player02Wins = true;
    } else if (player02 == VALUES.PAPEL) {
      player01Wins = true;
    } else if (player02 == VALUES.TIJERAS) {
      tie = true;
    } else {
      console.log("Valor jugador 2 inválido");
    }
  } else {
    console.log("Valor jugador 1 inválido");
  }

  /*
    Por último enseñamos el mensaje correspondiente dependiendo de si
    gana el jugador 1, el 2 o si hay empate.
  */
  if (tie) {
    console.log(`Empate por ${NAMES[player01]}`);
  } else if (player01Wins) {
    console.log(`GANA JUGADOR 1 porque ${NAMES[player01]} machaca ${NAMES[player02]}`);
  } else if (player02Wins) {
    console.log(`GANA JUGADOR 2 porque ${NAMES[player02]} machaca ${NAMES[player01]}`);
  }
}
