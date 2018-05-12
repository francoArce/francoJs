/*var numero = 2;
var texto = 'HOLA';
var booleano = true;
var undefined = undefined;

console.log("Este es número: "+ numero);
console.log("Este es texto: "+ texto);
console.log("Este es booleano: "+ booleano);
console.log("Este es indefinido: "+ undefined);

var numero1 = 5;
var numero2 = 8;
var numero3 = 10;
var numero4 = 43;

console.log("La suma entre numero1 y numero2 es :" , (numero1 + numero2));
console.log("La resta entre numero1 y numero2 es :" , (numero1 - numero2));
console.log("La multiplicaicon entre numero3 y numero4 es :" , (numero1 * numero2));
console.log("La division entre numero3 y numero4 es :" , (numero1 / numero2));

var bool1 = true;
var bool2 = false;

console.log(bool1 === bool2);
console.log (bool1 !== bool2);
console.log (bool1 !== bool1);
console.log (bool2 === bool2);

var num1 = 10;
var num2 = 20;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
*/


/*var num1 = 10;
var num2 = 20;

if(num1 > num2){
	
	console.log("Se valida");
	
}else{
	
	console.log("No ejecuta");
}


/*este if con condicional or || se cumple con una condicion true*/
/*if(num1 < num2 || num1 > num2){
	
	console.log("Se valida");
}



if(num1 < num2 && num1 > num2){
	
	console.log("no valida");
	
}else if (num1 < num2 || num1 > num2){
	
	console.log("se ejecuta");
}else {
	
	comsole.log( "se ejecuta 2");
}*/


/*console.log(num1 < num2 || num2 > num1);
console.log(num1 < num2 || num2 >= num1);
console.log(num1 > num2 || num2 > num1);
console.log(num1 > num2 || num2 < num1);
|| basta con que una condicion se cumpla para que sea verdadero*/


/*console.log(num1 < num2 && num2 > num1);
console.log(num1 < num2 && num2 >= num1);
console.log(num1 > num2 && num2 > num1);
console.log(num1 > num2 && num2 < num1);*/




function rango(num){
	if(num <= 5){
		return 0;
	}else if(num >= 6 && num <=10){
		return 1;
	}
	
}
switch(rango(7)){
	
	case 0:
	console.log("rango es 0");
	break;
	
	case 1:
	console.log("rango es 1");
	break;
	
}


var num1 = 10;
var num2 =  20;

switch(num1 + num2){
	
	case 10:
	console.log("es igual a 10");
	break;
	
	case 20:
	console.log("es igual a 20");
	break;
	
	case 30:
	console.log("es igual a 30");
	break;
	
	default:
	console.log("es otro valor");
	
}


function nombreCompleto(nombre, apellido){
	
	console.log(nombre + " " + apellido);
}

nombreCompleto("Franco", "Arce");



function edad(anoNac){ 
   
   return 2018 - anoNac;
}

console.log(edad(1986));

if(edad(2011) >= 18)
{
	console.log("es mayor de edad");
}else {
	
	console.log("es menor de edad");
}











