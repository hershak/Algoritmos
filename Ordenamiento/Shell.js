//http://jorgep.blogspot.pe/2010/09/shell-sort.html
module.exports.Shell = function(lista) {
        for (var salto = lista.length / 2; salto != 0; salto /= 2) {
            var cambios = true;
            while (cambios) {
                cambios = false;
                for (var i = salto; i < lista.length; i++) {
                    if (lista[i - salto] > lista[i]) {
                        var aux = lista[i];
                        lista[i] = lista[i - salto];
                        lista[i - salto] = aux;
                        cambios = true;
                    }
                }
            }
        }
        return lista;
    }
    /*
    public static void ordenacionShell(int[] v) {
            final int N = v.length;
            int incremento = N;
            do {
                incremento = incremento / 2;
                for (int k = 0; k < incremento; k++) {
                    for (int i = incremento + k; i < N; i += incremento) {
                        int j = i;
                        while (j - incremento >= 0 && v[j] < v[j - incremento]) {
                            int tmp = v[j];
                            v[j] = v[j - incremento];
                            v[j - incremento] = tmp;
                            j -= incremento;
                        }
                    }
                }
            } while (incremento > 1);
        }
    */