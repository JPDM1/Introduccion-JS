//var: declaración de varialbe (ámbito global)
// Deja redeclarar!!!!
var x=5;
var x=5; // redeclaración
// Creo un Condicional para tener un bloque de código
if(true){ //forzar la entrada al bloque
    console.log(x);
    var y= 10;
}
console.log(y);
console.log("-----LET------")
// NO DEJA REDECLARAR!!!!
let z=5; //variable global
console.log(z);
// ámbito local: declarar una variable dentro de un bloque de código
console.log("---CONST----");
//eL MISMO COMPORTAMIENTO QUE "LET" pero no lo podemos modificarlo
let o=5;
o=6;
console.log(o);