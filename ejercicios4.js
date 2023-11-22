// //Ejercicio 1 -> Declarar una variable numérica. Mostrar todos los números pares en formato decreciente.
// let i=50;
// while (0 < i) {
//     if (i % 2 == 0) { 
//         console.log(i) ;
//     }
//     i--;
// }
// //Ejercicio 2 -> Declarar una variable numérica. 
// //Después imprimir hasta ese número los números impares concatenado con el texto “es impar”.
// let j=1;
// while (j<=20) {if (j % 2 ==0) {console.log(j+" es par")
//     } else { console.log(j+ " es impar")}
//     j++}
// // Ejercicio 3 -> Crear un número e ir sumando ese número hasta que llegue a 100. 
// //Mostrando su estado y viendo al final el número de veces que ha sido necesario 
// //sumar hasta llegar a 100.
// let n=4;
// while (n <= 100) {console.log(n);
//        n= 2*n;
//     }
// // Gráfica
// let estrella = "*";
// var n= 20;
// let i=1;
// while (i<=n) {console.log(estrella);
//              estrella += "*";
//              i++;
//             }
// Horas, minutos y segundos
let H=0;
let M=0;
var T=3600*23;
if(T>=3600*24){console.log("Es mayor que un día");
             } else {
while (3600*H<=T && H <24) {H++}
H--;
while(3600*H+60*M<=T){M++}
M--;
console.log(`${H}:${M}:${T-(3600*H+60*M)}`);
             }