function Pascal(lista,memoria) {
  var lista = [];
  var memoria = [];
  for (i = 0; i < 5; i++) {
    console.log('paso for');
    if (i < 2) {
      lista[i] = 1;
    } else {
      for (j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          memoria[j] = 1;
        } else {
          memoria[j] = lista[j - 1] + lista[j];
        }
      }
      lista = memoria;
    }
  }
  return lista;
}

