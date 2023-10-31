// Actividad 02:
// El número de lados de una figura geométrica se refiere a la cantidad de líneas rectas que forman la figura.

// Hay muchas figuras geométricas que tienen 3 o más lados, algunas de las más comunes son:

// Triángulo: una figura geométrica de tres lados y tres ángulos.
// Cuadrilátero: una figura geométrica de cuatro lados y cuatro ángulos.
// Pentágono: una figura geométrica de cinco lados y cinco ángulos.
// Hexágono: una figura geométrica de seis lados y seis ángulos.
// Heptágono: una figura geométrica de siete lados y siete ángulos.
// Octágono: una figura geométrica de ocho lados y ocho ángulos.
// Nonágono: una figura geométrica de nueve lados y nueve ángulos.
// Decágono: una figura geométrica de diez lados y diez ángulos.
// Dodecágono: una figura geométrica de doce lados y doce ángulos.

// Hay muchas más figuras geométricas con tres o más lados, pero estas son algunas de las más comunes.

// let lados = prompt('INGRESE CANTIDAD DE LADOS');

// parseamos a un número entero
let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));

for (let index = 1; index <= lados; index++) {
	if (index > 3) {
		alert('La figura geométrica tiene más de 3 lados por lo que no es un Tríángulo');
		break; // podemos utilizar el break si una vez comprobado que no es un triangulo, si deseamos salir del bucle for para que no nos muestre constantemente la alerta
	}

	alert('lado: ' + index);
}

// ¿Qué tiene que hacer este código?
// El código recorre con un ciclo for y ejecuta su bloque de código mientras la condición index < lados sea verdadera(true)

// ¿Por qué no cumple con su función?
// No se cumple con la función primero porque no se le ha introducido sentencias dentro del bloque de código del if. Además la condición del if nunca será verdadera si index no es mayor que 3

// ¿Qué propuesta podrías hacer para que tenga sentido su uso?
// Podríamos hacer que cuando la condición sea verdadera se muestre un alert con un mensaje por ejemplo "La figura geométrica tiene más de 3 lados por lo que no es un Tríángulo" . Debemos modificar el valor de index = 1 ya que el valor de esa variable nos ayudará a controlar en la condición del if si una figura tiene más de 3 lados para poder mostrar la alerta. También vamos a modificar la condición del bucle for con el operador de comparación menor igual <= ya que index comienza en 1 y queremos que se compruebe la condición mientras sea menor o igual que la variable lados