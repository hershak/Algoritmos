function Arbol(n) {
  var ref = '';
  var space ='';
  for (var i = 0; i < n; i++) {
    for (var c = n-1; c > 0; c--) {
      space += ' ';
    }
    ref+=space;
    for (var j = 1; j <= ((2 * i) + 1); j++) {
      ref += '*';
    }
    ref += '\n';
  }
  return ref;
}
var a = Arbol(10);
console.log(a);
