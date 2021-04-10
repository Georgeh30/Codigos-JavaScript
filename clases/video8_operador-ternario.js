/* Uso de los Operadores Ternarios: se usa con frecuencia como atajo para la 
instrucción if. Siendo un condicional simple que ejecuta una de dos instrucciones 
posibles dependiendo de la evaluación previa de una condición. */

let num = 4;

/* Esquema del Operador Ternario

Con solo una sentencia
(condicion) ? true : false

Con mas de una sentencia
(condicion) ?
    (primera sentencio,
     segunda sentencia)
    :
    (primera sentencia,
     segunda sentencia)
*/

// Forma normal con una condicion if-else
if (num % 2 == 0) console.log(`${num} es par`);
else console.log(`${num} es impar`);

// Operador Ternario
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);


//  Operador Ternario con varias sentencias
(num % 2 == 0) ? 
(
    console.log(`${num} es par`),
    console.log(`${num} es par 2`)
) 
: 
(
    console.log(`${num} es impar`),
    console.log(`${num} es impar 2`)
);

