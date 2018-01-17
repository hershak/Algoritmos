function Arbol() {
    var ref = '\n';
    for (var i = 0; i < 10; i++) { //Es la cabeza del árbol
        for (var c = (10 - i); c > 1; c--) { //Espacios en blanco para que pueda tener la forma de un triángulo isosceles
            ref += ' ';
        }
        for (var j = 1; j <= ((2 * i) + 1); j++) { // dibujando el triángulo isosceles
            ref += '*';
        }
        ref += '\n';
    }
    for (var t = 1; t <= 9; t++) { //la longitud del tallo es la cantidad de iteraciones
        for (var r = 1; r <= 9; r++) { //nueve uniddades de espacio para dibujar el tallo
            ref += ' ';
        }
        ref += '* \n';
    }
    for (var ra = 1; ra <= 5; ra++) { // espacio en blanco antes de la raíz
        ref += ' ';
    }
    for (var rb = 1; rb <= 9; rb++) { //la raiz dibujadas
        ref += '*';
    }
    return ref;
}

// Imprimiendo resultados
var a = Arbol();
console.log(a);