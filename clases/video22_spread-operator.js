/* Uso del metodo spread operator (operador de expansión)
Este operador permite que los elementos de un array se expandan y, de esta
manera, podemos añadir un array dentro de otro sin que el resultado sean
arrays anidados, si no un único array al que se han añadido nuevos valores. */


const numbers = [-12, 2, 3, 23, 43, 2, 3];
console.log(...numbers);

const addNumbers = (a, b, c) => {
    console.log(a + b + c);
}

let numbersToAdd = [1, 2, 3];

// Ejemplo para ver la diferencia entre poner (...) y no poner antes de la variable a imprimir

/*  Aqui solo lo define como si llenaramos el parametro a de la funcion, ya
que detecta la variable de tipo arreglo como una sola posicion, aun que tenga 3
elementos */
addNumbers(numbersToAdd);

/* Aqui ya incluimos los (...) al principio y lo que hace es expandir el arreglo
quitando las comas y separandolas para que sea detectado cada uno de los 3
elementos que hay en el arreglo y hace la suma de la funcion */
addNumbers(...numbersToAdd); /* Envia elementos en un Array a una funcion */

/* Añadir un array a otro array, ya que normalmente no lo hace */
let newUsers = ['javier', 'david', 'rosa', 'juan', 'mercedes'];
let users = ['martha', 'jaime', 'laura'];


/* Esta es la forma basica y en la cual se puede hacer cuando son pocos los
elementos a ingresar, ya que cuando son muchos elementos, es cuando usamos
bucles para insertar elementos de un array a otro array, entonces los (...)
funcionan para expandir los elementos del arreglo y que puedan ser insertados
users.push(newUsers[0], newUsers[1], newUsers[2]) */

/* Aqui ya usamos los (...) y se agregan los elementos del primer arreglo en
las primeras posiciones del otro arreglo donde se queria insertarlos */
users.push(...newUsers)
/* Otras formas de que los elementos que agregamos esten en distintos indices
users.splice(2,  0, ...newUsers); // <apartir de que posicion/ borrar/ agregar>
users.unshift(...newUsers); // en teoria es para agregarlos al principio
*/
console.log(users);


// COPIAR ARRAY A UN ARRAY VACIO
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];
console.log(arr2);


// CONCATENAR ARRAYS
let arr11 = [1, 2, 3, 4];
let arr22 = [6, 7, 8];

/* Esta es la primera forma como se puede concatenar dos arrays */
let arrConcat = arr11.concat(arr22);
console.log(arrConcat);

/* De esta forma concatenamos todos los arreglos que querramos con los (...) */
let arrConcat2 = [...arr11, ...arr22, ...arrConcat];
console.log(arrConcat2);


/* PARA CASOS DONDE SE ENVIA UN NUMERO INDEFINIDO DE ELEMENTOS A UNA FUNCION,
SE USA EL "PARAMETRO REST", EL CUAL CONSISTE EN PONER NOMBRE QUE QUERRAMOS
DENTRO DE LOS PARENTESIS COMO UN PARAMETRO PERO CON LOS 3 PUNTOS AL PRINCIPIO
PARA QUE SE PUEDA INGRESAR A TRAVES DE ESE PARAMETRO UN NUMERO INDEFINIDO
DE ELEMENTOS QUE A CONTINUACION VEREMOS EN LA FUNCION "restParms"*/
const restParms = (...numbers) => {
    console.log(numbers);
}
// Y aqui llamamos la funcion ingresando un numero indefinido de elementos
restParms(1, 2, 3, 4, 5, 6, 7);


// USANDO LA LIBRERIA MATH Y LOS PUNTOS (...)
const numbers111 = [-12, 2, 3, 23, 43, 2, 3];
/* De la forma normal no saca el valor maximo usando max() */
console.log(Math.max(numbers111));

/* Entonces, usando los 3 puntos antes de la variable del arreglo si funcionará */
console.log(Math.max(...numbers111));
/* De igual forma podemos sacare el minimo */
console.log(Math.min(...numbers111));

/* ELIMINAR ELEMENTOS DUPLICADOS */

/* Aqui usamos el objeto "new Set()", el cual no permite elementos duplicados, y
a la hora de quitar los duplicados lo convierte en objeto set de esta forma: */
console.log(new Set(numbers111));

/* Pero si queremos que sigan siendo de tipo arreglo los elementos, usamos (...) */
console.log([...new Set(numbers111)]);
