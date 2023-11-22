//Introducir el color del semáforo y mostrar si se puede pasar, extremar la precaución o no pasar

var color= "verde"
if(color == "rojo"){console.log(`Usted no puede pasar.\nExtreme sus precausiones`);
} else {console.log("Sí puede pasar.\nPero con cuidado!!")};//tanto con `` y "" funcionan igual a ambos casos

//Mostrar si un número es primo
var n=10;
var i=2;
while(i<n){if(n % i != 0){i+=1}else{break}};
if(i==n){console.log(`${n} es primo`)} else {console.log(`${n} no es primo`)};

//Introducir 3 números. ordenar descendentemente
var l=[10,15,11,22,33,10];
var n= l.length-1;
var L =[];
for(var j=0;j<n;j++){var max=l[0];
                      for(var i=1; i<l.length;i++){if(l[i]>max){max= l[i]}};
                      l=l.filter(k=>k!=max);
                      L.push(max)};
L.push(l[0]);
console.log(L);
//Chequear si la letra del dni es correcto
var dni="23878346E";
var n_dni=dni.substring(0,8);
var letra_dni=dni.substring(8,9).toLocaleUpperCase();
//En JavaScript, no hace falta cambiar el formato de variable de caracter a número.
var n_letra= n_dni % 23;
console.log(n_letra); 
let fechaCorrecta= true;
console.log(8 / 7);



