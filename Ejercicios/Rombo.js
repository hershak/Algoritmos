function Rombo() {
  var n = 5;
  var ref = '';
  for (var i = 0; i < n; i++) {
    for (var b = (n - i); b > 1; b--) {
      ref += ' ';
    }
    for (var j = 1; j <= ((2 * i) + 1); j++) {
      ref += '*';
    }
    ref += '\n';
  }
  for (var i = 4; i > 0; i--) {
    for (var b = 0; b < 5 - i; b++) {
      ref += ' ';
    }
    for (var j = 0; j < ((i * 2) - 1); j++) {
      ref += '*';
    }
    ref += '\n';
  }
  return ref;
}
var r = Rombo();
console.log(r);
