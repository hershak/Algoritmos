function Arbol(n) {
    var ref = '';
    for (var i = 0; i < n; i++) {
        for (var c = (n - i); c > 0; c--) {
            ref += '-';
        }
        for (var j = 1; j <= ((2 * i) + 1); j++) {
            ref += '*';
        }
        ref += '\n';
    }
    for (var t = 0; t < (n - 1); t++) {
        for (var r = 0; r < n; r++) {
            ref += ' ';
        }
        ref += '* \n';
    }
    for (var ra = 0; ra < 5; ra++) {
        ref += '-';
    }
    for (var ra = 1; ra < 9; ra++) {
        ref += '*';
    }
    return ref;
}
var a = Arbol(10);
console.log(a);