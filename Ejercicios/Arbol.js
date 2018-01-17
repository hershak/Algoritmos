function Arbol() {
  var n = 10;
  var ref = '';
  for (var i = 0; i < n; i++) { //Es la cabeza del árbol
    for (var c = (n - i); c > 1; c--) { //Espacios en blanco para que pueda tener la forma de un triángulo isosceles
      ref += ' ';
    }
    for (var j = 1; j <= ((2 * i) + 1); j++) { // dibujando el triángulo isosceles
      ref += '*';
    }
    ref += '\n';
  }
  for (var t = 0; t < (n - 1); t++) { //la longitud del tallo es la cantidad de iteraciones
    for (var r = 1; r < n; r++) { //nueve uniddades de espacio para dibujar el tallo
      ref += ' ';
    }
    ref += '* \n';
  }
  for (var ra = 0; ra < 5; ra++) { // espacio en blanco antes de la raíz
    ref += ' ';
  }
  for (var ra = 1; ra < 10; ra++) { //la raiz dibujadas
    ref += '*';
  }
  return ref;
}
var a = Arbol();
console.log(a);
