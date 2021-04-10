//

let numbers = [1 ,2, 3, 4, 5];
let number = 4;

/* Propiedad .length - Devuelve el número de posiciones que contiene el array */
console.log(numbers.length);

/* Metodo Array.isArray() - Devuelve true si la variable es un array */
console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

/* Metodo de eliminacion de un elemento
    .shift() - Elimina el primer elemento del array y devuelve ese elemento
    .pop() - Elimina el último elemento de un array y devuelve ese elemento */
let elemento_eliminado1 = numbers.shift();
console.log(elemento_eliminado1);
console.log(numbers);

let elemento_eliminado2 = numbers.pop();
console.log(elemento_eliminado2);
console.log(numbers);

/* Metodo para añadir elementos
    .push(elemento1, elemento2, ...) - Añade uno o más elementos al final del 
    array y devuelve la nueva longitud.
    .unshift(elemento1, elemento2, ...) - Añade uno o más elementos al comienzo 
    del array y devuelve la nueva longitud */
console.log(numbers);
let longitud_elementos1 = numbers.push(5, 6, 7, 8);
console.log(longitud_elementos1);
console.log(numbers);

let longitud_elementos2 = numbers.unshift(0, 1);
console.log(longitud_elementos2);
console.log(numbers);

/* .indexOf() - Devuelve el primer índice del elemento que coincida con el
valor especificado, osea que empieza a buscar desde el principio y el primero
que encuentra es el que muestra su indice, o -1 si ninguno es encontrado. */
let arreglo = [1, 'hola', 20, 'soy', 'jorge', 'hola'];
console.log(arreglo);
console.log(arreglo.indexOf("hola"));


/* .lastIndesOf() - Devuelve el indice donde encuentre el elemento que 
coincida con el valor especificado, pero empesando a buscar desde el ultimo 
hacia atras */
console.log(arreglo.lastIndexOf("hola"));

/* .reverse() - Invierte el orden de los elementos del array. */
console.log(arreglo.reverse());

/* .join('separador') - Devuelve un string con el separador que indiquemos, 
por defecto son comas */
let arrayString = numbers.join('-');
console.log(arrayString);

/* .splice(a, b, items) - Cambia el contenido de un array eliminando elementos
existentes y/o agregando nuevos elementos.
a - Indice de inicio
b - Número de elementos (opcional)
items - Elementos a añadir en el caso de que se añadan (opcional) */

// 1° FORMA - indicamos que elimine desde la posicion del indice 3 hasta el final
arreglo.splice(3);
console.log(arreglo);

/* 2° FORMA - indicamos que elimine apartir del indice 2 pero solo dos elementos 
del arreglo, osea que eliminara el de la posicion del inidce 2 y el que sigue */ 
arreglo.splice(2,2); 
console.log(arreglo);

/* 3° FORMA - indicamos que elimine desdel indice 2 solamente 2 elementos y 
apartir del tercer valor agregado en splice(valor1, valor2, valor3), estariamos
indicando que agregue cada uno de ellos al arreglo */
numbers.splice(2, 2, 10, 23, 64);
console.log(numbers);

/* .slice(a, b) - Extrae elementos de un array desde el indice "a" hasta el 
índice "b". Si no existe "b" lo hace desde "a" hasta el final, si no existe ni "a"
ni "b" hace una copia del original */
let arreglo2 = [4, 6, 8, 'tres', 5, 'uno'];

/* 1° FORMA EN SLICE - si no ponemos parametros dentro de los parentesis, hace una 
copia completa del arreglo original */
let copia_arreglo = arreglo2.slice();
console.log(copia_arreglo);

/* 2° FORMA EN SLICE - si indicamos el primer parametro dentro de los parentesis,
le decimos que copie loe elementos a partir del indice 2 */
let copia_arreglo2 = arreglo2.slice(2);
console.log(copia_arreglo2);

/* 3° FORMA EN SLICE - si indicamos los dos parametros dentro de los parentesis,
le decimos que apartir del indice 2 haga una copia hasta uno antes del indice 3 */
let copia_arreglo3 = arreglo2.slice(2, 3);
console.log(copia_arreglo3);