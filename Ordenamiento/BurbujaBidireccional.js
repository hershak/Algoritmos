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