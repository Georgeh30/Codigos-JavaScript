/* Uso de Destructuring */

/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}

//FORMA TRADICIONAL
const name = person.name
const age = person.age
const email = person.email
console.log(name, age, email)


//DESTRUCTURING
/* creamos las variables de cada campo del objeto dentro de las llaves despues 
del "const" dandole el mismo nombre o cambiandolo por otro, con solo poner ":" y
despues el nuevo nombre de la variable, y despues del "=" poner el nombre del objeto donde obtendremos los valores de cada clave */
const { name: nombre, age: edad, email: correo } = person
console.log(nombre, edad, correo)


const numbers = [1, 2, 3, 4]
/* para imprimir la tercera posicion hay que llenar los huecos de la posiciones
1 y 2, en este caos con cualquier letra como por ejemplo, a y b y ya despues 
imprimimos la posicion 3, con solo ingresar el nombre que le pusimos al 3° hueco */
const [a, b, terceraPosicion] = numbers
console.log(terceraPosicion)

/* esta funcion para poder obtener el valor de una clave dentro de un objeto
a través de un parametro, debemos poner el parametro entre llaves{} para
indicar que vamos a ingresar a un objeto para obtener el valor de esa clave */
const printPerson1 = ({ name }) => {
    console.log(name)
}
printPerson1(person)

/* o poner "name" que sera el nombre de la clave del objeto y poner ": nombrenuevodevariable" y de igual forma obtener el valor pero por medio de el nuevo nombre de variable*/
const printPerson2 = ({ name: nombre }) => {
    console.log(nombre)
}
printPerson2(person)

/* Funcion asincrona para obtener los usuarios */
const getUsers = async () => {
    /* uso de destructuring para obtener los usaurios del campo con la clave "data" del JSON de la url a través de la nueva variable que le llamamos
    "users", obteniendolo con el metodo "get" del objeto "axios" con el "await"
    para que esperemos a que termine de obtener todo los usuarios y una vez termine, proceguir con la ejecucion de las demas lineas de codigo */
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

    /* imprimimos a consola los los objetos obtenidos de la url */
    console.log(users)
}

/* mandamos a llamar a la funcion para que se ejecute */
getUsers()



