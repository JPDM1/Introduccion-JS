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
var l=[10,15,11,22,33];
var n= l.length-1;
var L =[];
for(var j=0;j<n;j++){var max=l[0];
                      for(var i=1; i<l.length;i++){if(l[i]>max){max= l[i]}};
                      l=l.filter(k=>k!=max);
                      L.push(max)};
L.push(l[0]);
console.log(L);





