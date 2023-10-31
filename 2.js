// Find The Bug

// Actividad 01:
// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');

// Parseamos cantidad a un numero entero
let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES')); //parseFloat o Number también se puede usar
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index++) {
	console.log(texto);
}

// ¿Qué tiene que hacer este código?
// El código tiene que repetir el valor de la variable 'texto' n cantidad de veces

// ¿Por qué no cumple con su función?
// No cumple la función porque no se esta incrementando el valor de la variable 'index' un operador de incremento que podemos utilizar es el ++ ejemplo index++ esto aumentará el valor de index en 1 por cada cicle hasta que la condición index < cantidad devuelva false.

// Al introducir un número válido por prompt() para la variable cantidad esta va a contener un número pero en formato de texto (string) la condición index < cantidad va a comparar el valor de index con el valor numerico de cantidad y siempre que sea un número devolverá true o false de acuerdo a la condición evaluada sin embargo es una buena práctica es parsear cantidad para que sea una variable númerica del mismo tipo de index ya que esto puede evitar errores en otras operaciones donde usemos esa variable.
