function Shell(lista) {
  var k = lista.length / 2;
  var aux = 0;
  var aux2 = 0;
  while (k >= 1) {
    var contador = 1;
    while (contador > 0) {
      contador = 0;
      for (var i = 0; i < k; i++) {
        if (lista[i] > lista[i + k]) {
          aux = lista[i];
          aux2 = lista[i + k];
          lista[i] = aux2;
          lista[i + k] = aux;
          contador++;
        }
      }
    }
    k /= 2;
  }
  return lista;
}
var M = [8, 5, 2, 6, 4];
console.log(M);
M = Shell(M);
console.log(M);
M = [100, 6, 5, 5, 3, 2, 8, 5, 6, 7, 4, 2, 9, 2, 6, 4, 41];
console.log(M);
M = Shell(M);
console.log(M);
M = [5, 65, 1, 0, 02, 52, 64, 21, 20, 2.8];
console.log(M);
M = Shell(M);
console.log(M);
