function Seleccion(lista) {
  var p = 0;
  while (p < lista.length) {
    var min = 0;
    //var pos = 0;
    var aux = 0;
    for (var i = p; i < lista.length; i++) {
      if (i == p) {
        min = lista[i];
        //pos = i;
      } else {
        if (min > lista[i]) {
          aux = lista[i];
          lista[i] = min;
          min = aux;
          //pos = i;
        }
      }
    }
    /*console.log(min);
    console.log(pos+'\n');*/
    aux = lista[p];
    lista[p] = min; 
    p++;
  }
  return lista;
}

var M = [8, 5, 2, 6, 4];
console.log(M);
M=Seleccion(M);
console.log(M);


M = [100,6,5,5,3,2,8,5,6,7,4,2,9,2,6,4,41];
console.log(M);
M=Seleccion(M);
console.log(M);

M = [5,65,1,0,02,52,64,21,20,2.8];
console.log(M);
M=Seleccion(M);
console.log(M);
