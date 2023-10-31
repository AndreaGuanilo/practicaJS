//Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
//cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".


//Creamos el aler para que el usuario sepa qué va a pasar.
alert('Ingrese un número para determinar si es par o impar. Mostraremos un lista de los mismo al finalizar.');

//Declaramos las variables que vamos a usar
let salir = '',
	cantidadPares = 0,
	cantidadImpares = 0,
	listaNumerosPares = '',
	listaNumerosImpares = '';

//El usuario decide el valor de esta variable. Se coloca Number para que el string pase a valor numérico
let nummero2 = Number(prompt('Introduzca un numero'));

// mientras que la variable salir sea diferente de "salir"
// miestras el usuario no tipee la palabra "salir", se va a cumplir la condición:
while (salir !== 'salir') {
	if (nummero2 % 2 == 0) { // Si cuando divido el número que me da el usuario y tengo resto/residuo = 0
		cantidadPares++; // La cantidad de pares incremente en 1
		listaNumerosPares += nummero2.toString() + ', '; // El número ingresado por el usuario se añade al string de la lista de números pares
	} else { //De lo contrario
		cantidadImpares++; // La cantidad de impares incremente en 1
		listaNumerosImpares += nummero2.toString() + ', ';// El número ingresado por el usuario se añade al string de la lista de números impares
	}
//Sale otro mensaje para el usuario
	salir = prompt('Ingrese la palabra "salir" y presione el botón aceptar si desea salir del programa. En caso contrario presione cancelar');

	if (salir !== 'salir') { // miestras el usuario no tipee la palabra "salir", se va a cumplir la condición:
		nummero2 = Number(prompt('Introduzca un nuevo numero')); //El usuario decide el valor de esta variable. Se coloca Number para que el string pase a valor numérico
	}
}

if (cantidadPares !== 0) { //Si la cantidad de Pares no es 0
	console.log('Cantidad de números Pares: ' + cantidadPares);
	console.log('Lista de números Pares: ' + listaNumerosPares.substring(0, listaNumerosPares.length - 2));
} else {
	console.log('No existen números pares.\n');
}

if (cantidadImpares !== 0) { //Si la cantidad de Impares no es 0
	console.log('Cantidad de números Impares: ' + cantidadImpares);
	console.log('Lista de números Impares: ' + listaNumerosImpares.substring(0, listaNumerosImpares.length - 2));
} else {
	console.log('No existen números impares.');
}

