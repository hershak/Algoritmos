listaodule.exports.Insercion = function(lista) {
    /*
      var i = 1;
      while (i < lista.length) {
          var j = i;
          while (j > 0 && lista[j - 1] > lista[j]) {
              var aux = lista[j];
              lista[j] = lista[j - 1]
              lista[j - 1] = aux;
              j--;
          }
          i++;
      }*/
    var i = 1;
    while (i < lista.length) {
        var x = lista[i];
        var j = i - 1;
        while (j >= 0 && lista[j] > x) {
            lista[j + 1] = lista[j];
            j--;
        }
        lista[j + 1] = x;
        i++;
    }

    return lista;
}