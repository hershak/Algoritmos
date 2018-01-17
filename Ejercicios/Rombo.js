function Rombo() {
  var n = 5;
  var ref = '';
  for (var i = 0; i < n; i++) { //Parte superior del rombo, considero hasta la fila 5.
    for (var b = (n - i); b > 1; b--) { //Espacios en blanco en la parte superior.
      ref += ' ';
    }
    for (var j = 1; j <= ((2 * i) + 1); j++) { // Asteriscos en la parte superior.
      ref += '*';
    }
    ref += '\n';
  }
  for (var i = 4; i > 0; i--) { // Parte inferior, considero las 4 filas restantes.
    for (var b = 0; b < 5 - i; b++) { // Espacios en blanco en la parte inferior.
      ref += ' ';
    }
    for (var j = 0; j < ((i * 2) - 1); j++) { // Asteriscos en la parte inferior.
      ref += '*';
    }
    ref += '\n';
  }
  return ref;
}

// Imprimiendo resultados.
var r = Rombo();
console.log(r);
