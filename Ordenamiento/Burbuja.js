function Burbuja(lista) {
    var contador = 1;

    while (contador > 0) {
        //console.log('Paso while');

        contador = 0;
        for (var i = 0; i < lista.length; i++) {
            //console.log('Paso for');

            if (lista[i] > lista[i + 1]) {
                //console.log('Paso intercambio de valor');
                var aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
                //console.log('M[i]='+lista[i]+' : M[i+1]='+ lista[i+1]);
                contador++;
            }
        }

    }
    return lista;
}

var M = [8, 5, 2, 6, 4];
console.log(M);
M=Burbuja(M);
console.log(M);


M = [100,6,5,5,3,2,8,5,6,7,4,2,9,2,6,4,41];
console.log(M);
M=Burbuja(M);
console.log(M);

M = [5,65,1,0,02,52,64,21,20,2.8];
console.log(M);
M=Burbuja(M);
console.log(M);
