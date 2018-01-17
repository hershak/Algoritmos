function ArbolNavidad(){
    var n1=n2=n3=7;
    var ref='';
    for(i=0;i<n1;i++){// Primer nivel del árbol.
        for(b=((n1+6)-i);b>0;b--){ // Trece espacios en blanco. En este nivel el espacio tienen que ser más.
            ref+=' ';
        }
        for(a=0;a<((2*i)+1);a++){ // En el primer nivel la cantidad de asteriscos es mínimo empezando desde 1 .
            ref+='*';
        }
        ref+='\n';
    }
    for(i=0;i<n2;i++){// Segundo nivel del árbol.
        for(b=((n2+3)-i);b>0;b--){ // Diez espacios en blanco, disminuyo en 3 a compración del primer nivel.
            ref+=' ';
        }
        for(a=0;a<((2*i)+7);a++){ // En este nivel la cantidad de asteriscos es más, empieza desde 7.
            ref+='*';
        }
        ref+='\n';        
    }
    for(i=0;i<n3;i++){ // Tercer nivel del árbol.
        for(b=(n3-i);b>0;b--){ // Siete espacios en blanco, disminuyo en 3 a comparacion del segundo nivel n2.
            ref+=' ';
        }
        for(a=0;a<((2*i)+13);a++){ // Aumenta en 12 asteriscos, la cantidad de asteriscos empieza desde 13.
            ref+='*';
        }
        ref+='\n';        
    }
    for (var t = 0; t < 5; t++) { //la longitud del tallo es la cantidad de iteraciones, en este caso 5.
        for (var b = 0; b < 11; b++) { //once uniddades de espacio para dibujar el tallo.
          ref += ' ';
        }
        ref += '00000 \n'; //La longitud del tallo, un total de 5 asteriscos.
      }
      for (var b = 0; b < 9; b++) { // 9 espacios en blanco antes de la raíz.
        ref += ' ';
      }
      for (var r = 0; r < 9; r++) { //la raiz dibujadas.
        ref += '#';
      }
    return ref;
}

//Imprimiendo resultados por consola
var an= ArbolNavidad();
console.log(an);
