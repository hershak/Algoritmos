function Pascal(fila) {
    var lista = [1];
    var ref = '';
    for (i = 1; i <= fila; i++) {
        var memoria = new Array(i);
        for (j = 0; j < i; j++) {
            if (j == 0 || j == (i - 1)) {
                memoria[j] = 1;
            } else {
                memoria[j] = lista[j - 1] + lista[j];
            }
            ref += memoria[j] + ' ';
        }
        lista = memoria;
        ref += '\n';
    }
    return ref;
}

var L = Pascal(20);
console.log(L);