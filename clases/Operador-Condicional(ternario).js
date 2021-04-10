/* Uso de Operador Ternario */

/* Sustituyendo al condicional "if" para en casos de evaluar el true o false
de alguna expresion con valores de algun tipo */

/* Ejemplo 1 */
const condicion = ""

/* si "condicion" es true entra al texto "$2.00" y en caso de ser false entra 
al texto "$10.00", en el cual la variable "condicion" se puede evaluar si tiene
true o false guardado dentro de ella ó si tiene contenido dentro de esta variable
la condicion lo evaluara como true y si no tiene ningun contenido sera false  */
let texto = "La Cuota es de:  " + (condicion ? "$2.00" : "$10.00")
console.log(texto);

/* Ejemplo 2 */

/* evalua si pi es mayir a 4, en este caso no es mayor, asi que, entra al texto "Nop" */
var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
console.log(elvisLives);
