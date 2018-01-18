function Pascal(fila) {
  var lista = new Array(); // Se esta creando un array denominado lista el cual esta vacio.
  // var lista = [1]; // una manera más rápida de crear un array, ya con el valor asignado (lista[0]=1)
  var ref = ''; // Usado para dar los espacios, se tiene que incializar primero.
  for (i = 1; i <= fila; i++) { // La cantidad de filas.
    for (var b = (fila -i); b > 0; b--) { // la cantidad de espacios en blanco por cada fila (fila-1).
      ref += ' '; 
    }
    var memoria = new Array(i); // Se crea un array con un espacio de i posiciones.
    for (j = 0; j < i; j++) { // Cantidad de valores por cada fila.
      if (j == 0 || j == (i - 1)) { // La primera posicion(0) y la última posición(i-1) siempre seran 1.
        memoria[j] = 1;
      } else {
        memoria[j] = lista[j - 1] + lista[j]; // Se asigna el valor de la suma de la fila anterior a esta, por eso es que se creo el array lista.
      }
      ref += memoria[j] + ' '; // Los valores son agregados sucesivamente, dependiendo de la cantidad de posiciones i.
    }
    lista = memoria; // El nuevo valor de memoria tiene que ser asignado al array lista. Para que despues lista pueda ser nuevamente usada para la suma.
    ref += '\n'; // Se le da un espacio para el siguiente parrafo.
  }
  return ref;
}

// Imprimiendo resultados.
var L = Pascal(20);
console.log(L);
