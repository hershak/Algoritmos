function BurbujaBidireccional(lista) {
  var contador = 1;
  while (contador > 0) {
    //console.log('Paso while');

    contador = 0;
    for (var i = 0; i < lista.length; i++) {
        //console.log('Paso primer for');
      if (lista[i] > lista[i + 1]) {
        //console.log('Paso intercambio de valor en ida');
        var aux = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = aux;
        contador++;
      }
    }
    for (var i = lista.length - 1; i > 0; i--) {
        //console.log('Paso segundo for');
      if (lista[i] < lista[i - 1]) {
        //console.log('Paso intercambio de valor en vuelta');
        var aux = lista[i];
        lista[i] = lista[i - 1];
        lista[i - 1] = aux;
        contador++;
      }
    }
  }
  return lista;
}

var M = [8, 5, 2, 6, 4];
console.log(M);
M=BurbujaBidireccional(M);
console.log(M);


M = [100,6,5,5,3,2,8,5,6,7,4,2,9,2,6,4,41];
console.log(M);
M=BurbujaBidireccional(M);
console.log(M);

M = [5,65,1,0,02,52,64,21,20,2.8];
console.log(M);
M=BurbujaBidireccional(M);
console.log(M);
