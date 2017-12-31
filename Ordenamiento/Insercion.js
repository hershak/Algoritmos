function Insercion(lista) {
  var p = 1;
  var c = 0;
  while (p < lista.length) {
    console.log('Paso while');
    var aux = 0;
    var min_ = 0;
    for (var i = (p - 1); i < lista.length; i--) {
      console.log('Paso For');
      if (lista[i] > lista[p]) {
        console.log('Paso if');
        aux = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = aux;
        c++;
      }
    }
    min = lista[p];
    lista[p] = lista[p - c];
    p++;
    c = 0;
  }
  return lista;
}
var M = [8, 5, 2, 6, 4];
console.log(M);
M = Insercion(M);
console.log(M);
M = [100, 6, 5, 5, 3, 2, 8, 5, 6, 7, 4, 2, 9, 2, 6, 4, 41];
console.log(M);
M = Insercion(M);
console.log(M);
M = [5, 65, 1, 0, 02, 52, 64, 21, 20, 2.8];
console.log(M);
M = Insercion(M);
console.log(M);
