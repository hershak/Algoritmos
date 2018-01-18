function Pascal() {
var fila = 10;
  var lista = [1];
  var ref='';
  for (i = 0; i <= fila; i++) {
    var memoria = [i];
    for (j = 0; j < i; j++) {
      if (j == 0 || j == (i - 1)) {
        memoria[j] = 1;
      } else {
        memoria[j] = lista[j - 1] + lista[j];
      }
    }
    lista = memoria;
    ref += '\n';
  }
  return ref;
}

var L = Pascal();
console.log(L);
