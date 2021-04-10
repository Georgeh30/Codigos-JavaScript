// Uso de los metodos y arreglos

/* from() - 
para convertir en un arreglo una cadena de texto, y tambien usando 
split para lo mismo, aunque split podemos se parar por espacio o por otro signo */
let word = 'Hola mundo';
console.log(Array.from(word) + " ó " + word.split(''));


/* sort(callback) - 
ordenar los valores de la matriz como cadenas en base a la 
posición de cada letra en el código Unicode, no ordena correctamente cuando 
hay elementos que tengan mayusculas algunas y otras en minusculas al inicio, 
letras acentuadas, que sean numeros y que no tenga los parametros dentro de 
"sort()", ya que este metodo ordena en base al unicode */
const letters = ['b', 'C', 'z', 'a', 'ó'];
const numbers = [1, 8, 100, 300, 3];
/* Aqui imprime de forma desordenada
console.log(letters.sort());
console.log(numbers.sort()); */

// Solucion para ordenar las letras por abecedario
console.log(letters.sort((a, b) => a.localeCompare(b)));

// Solucion para ordenar los numeros de menor a mayor
console.log(numbers.sort((a, b) => a - b));
/* Esta es la funcion interna del metodo sort para el caso de menor a mayor
function menorMayor(a, b) {
    if (a - b < 0) return -1;
    if (a - b > 0) return 1;
    if (a == b) return 0;
}
*/

// Solucion para ordenar los numeros de mayor a menor
console.log(numbers.sort((a, b) => b - a));
/* Esta es la funcion interna del metodo sort para el caso de mayor a menor
function mayorMenor(a, b) {
    if (b - a < 0) return -1;
    if (b - a > 0) return 1;
    if (b == a) return 0;
}
*/


/* forEach() - 
es un ciclo que mejora la calidad del codigo con menos lineas de 
codigo */
const numbers1 = [12, 25, 47, 84, 98];

// interando en cada elemento dentro de un arreglo
numbers1.forEach((number) => console.log(number));

// interando en cada elemento dentro de un arreglo con la posicion de cada uno
numbers1.forEach((number, index) =>
    console.log(`${number} en la posición ${index}`));


/* .every(callback) - 
comprueba si todos los elementos del array cumplen 
la condicion */
const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];

/* indicamos que como condicion deben tener cada uno de los elementos dentro del 
arrelgo mas de 3 letras, en el caso de que se cumpla, imprimira un true y en caso
de no cunmplirse, imprimira un false */
console.log(words.every(word => word.length > 3));


/* .some(callback) -
en este caso pasamos la condicion a cada uno de los elementos, de que 
debe ser mayor a 2 letras, en este caso dara "true" porque comprueba que al menos
uno de los elementos dentro del arreglo debe tener mas de 3 letras */
console.log(words.some(word => word.length > 3));


/* .map(callback) -
Transforma todos los elementos del array y devuelve un nuevo array dependiendo
de la accion que desemos que haga dentro de los parentesis del metodo map() es
donde ira la funcion o la accion para convertir cada elemento del arreglo */
const numbers3 = [1, 8, 100, 300, 3];
const resultado = numbers3.map((number) => number * 2);
console.log(resultado);


/* .filter(callback) - 
Filtra todos los elementos del array que cumplan la condicion y devuelve un nuevo 
array ya con los que cumplan esta condicion que daremos como funcion dentro de 
los parentesis del metodo filter() */
const numbers4 = [1, 8, 100, 300, 3];
const resultado1 = numbers4.filter((number) => number > 40);
console.log(resultado1);


/* .reduce(callback) - 
Reduce todos los elementos del array a un único valor, a través de poner una 
funcion dentro de los parentesis para que en este caso sume los numero hasta 
que quede uno solo ya con el resultado de la suma */
const numbers6 = [1, 8, 100, 300, 3];
console.log(numbers4.reduce((a, b) => a + b));

/* Otra manera de usar el metodo .reduce(), en este caso creando un arreglo de 
objetos y usando reduce para obtener el numero de usuarios que esta online */
const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

/* usamos .reduce() con dos parametros dentro de los parentesis, el primer 
parametro es para que haga el conteo de los usuarios online y el parametro
dos es para que valide dentro de cada usuario si es verdad que esta online y 
asi pueda entrar a la condicion if y aumentar el contador y retornar el total */
const usersOnline = users.reduce((cont, user) => {
    if (user.online) {
        cont++;
    }
    return cont;
}, 0);

console.log(`Hay ${usersOnline} usuarios conectados`);
