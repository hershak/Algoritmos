var f = require('../BurbujaBidireccional');

var M = [8, 5, 2, 6, 4];
console.log(M);
M = f.BurbujaBidireccional(M);
console.log(M);


M = [100, 6, 5, 5, 3, 2, 8, 5, 6, 7, 4, 2, 9, 2, 6, 4, 41];
console.log(M);
M = f.BurbujaBidireccional(M);
console.log(M);

M = [5, 65, 1, 0, 02, 52, 64, 21, 20, 2.8];
console.log(M);
M = f.BurbujaBidireccional(M);
console.log(M);