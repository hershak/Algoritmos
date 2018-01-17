function Arbol(n) {
  var ref = '';
  for (var i = 0; i < n; i++) {
    for (var j = 1; j < ((2 * i) + 1); j++) {
      ref += '*';
    }
    ref += '\n';
  }
  return ref;
}
var a = Arbol(10);
console.log(a);
