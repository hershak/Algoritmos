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