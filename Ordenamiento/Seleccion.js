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
        //console.log(min);
        //console.log(pos+'\n');
        aux = lista[p];
        lista[p] = min;
        p++;
    }
    return lista;
}