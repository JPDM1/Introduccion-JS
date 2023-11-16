// Asignación de variables
var nombre= "Juan Pablo";
var apellidos="Delzo Melendez";
var edad= 42;
var estudios="ingeniero de caminos";
console.log(`Mi nombre completo es ${nombre} ${apellidos}, tengo ${edad} años y soy ${estudios}`);
// Todas las variables
var datos=[nombre,apellidos,edad,estudios];
console.log(`Soy ${datos[0]} ${datos[1]}.Tengo ${datos[2]} años y soy ${datos[3]}`);
console.log(datos.length);

//Segundo ejercicio
var A = 5; 
var B = 3; 
var C = -12;
//Solución
console.log(A > 3); //TRUE       	            	                        	
console.log(A > C);  //TRUE             	            	
console.log(A < C); //FALSE
console.log(B < C);   //FALSE                         	            	        	
console.log(B != C);   //TRUE                	 	         	
console.log(A == 3);  //FALSE
console.log(A * B == 15);  //TRUE              	                           	
console.log(A * B == -30);    //FALSE	                        	
console.log(C / B < A);//  TRUE
console.log(C / B == -10);   //FALSE    	                         	  
console.log(C / B == -4); //TRUE        	                    
console.log(A + B + C == 5);   //FALSE
console.log((A+B == 8) && (A-B == 2));// TRUE         	
console.log((A+B == 8) || (A-B == 6));  //TRUE
console.log(A > 3 && B > 3 && C < 3); //FALSE             	
console.log(A > 3 && B >= 3 && C < -3);  //TRUE

