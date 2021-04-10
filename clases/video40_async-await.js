/* Uso de async y await */

/* REGLAS:
1. Asincrono es cuando las funciones o las instruccion se ejecuta
   sin seguir una secuencia, osea que unas se pueden ejecutar 
   antes que otras aun que esten antes o despues de otras.
2. Promise es un objeto que se retorna dentro de una funcion, 
   en la cual la convierte en Asincrona 
3. Async se define en una funcion convirtiendola en Asincrona
4. Async no depende de Await para funcionar
5. Await sí depende de Async para funcionar
6. Await convierte tanto la funcion donde se aloja y la llamada de una funcion que retorna una 
   promesa, en una Sincrona o dicho de otra manera en base al nombre en español de "await",
   lo que hace es "esperar" a que la funcion a la que se llama, mande su return y una vez 
   resuelto, continua la secuencia del codigo que falta, PERO esto sucede sí y solo sí 
   en la funcion donde se aloja await, este definida como Async */


/* PRIMER EJEMPLO */
/* Creamos una funcion "getName" indicando que es asincrona con "async" */
/* const getName = async () => {
    /* insertamos dentro del return una nueva prosema 
    return new Promise((resolve, reject) => {
        /* funcion que se encarga de ejecutar otra funcion despues de un tiempo 
        determinado, en este caso des pues de 1500 ms (1.5 seg) */
/* Asi es su estructura - setTimeout(funcion, milisegundos) 
setTimeout(() => {
    resolve('Jorge')
}, 1500)
})
} */

/* llamamos a la funcion y le damos una nueva promesa ".then()", en el cual 
creamos una variable temporal donde automaticamente obtiene el valor que da
la funcion y la imprimimos */
// getName().then(name => console.log(name))

/* Creamos esta otra funcion de igual manera de tipo asincrona "async" */
/* const sayHello = async () => {
    /* creamos esta variable "name" e insertamos el resultado de la funcion que 
    llaamos "getName()" con el tipo de operador "await" para que esta funcion 
    "sayHello" espere a que se termine completamente de ejecutar la funcion 
    "getName()" y pueda continuar a terminar la funcion "sayHello()" 
    const name  = await getName()
    return `Hello ${name}`
} */

/* LLamamos a la funcion "sayHello()" dandole una promesa ".then()" donde creamos
una variable temporal en la que por default guarda el resultado de la funcion y
ka mandamos a imprimir a consola */
// sayHello().then(res => console.log(res))
/* FIN DE PRIMER EJEMPLO */


/* INICIO DEL SEGUNDO EJEMPLO */
/* USAMOS PARTE DEL EJEMPLO DEL ARCHIVO JS LLAMADO "video36_promesas.js" */
/* Arreglo de Objetos (Array JSON) */
const users1 = [
    {
        id: 1,
        name: 'Jorge'
    },
    {
        id: 2,
        name: 'Luis'
    },
    {
        id: 3,
        name: 'Maria'
    }
]

/* Arreglo de Objetos (Array JSON) */
const emails = [
    {
        id: 1,
        email: 'jorge123@gmail.com'
    },
    {
        id: 2,
        email: 'luis456@gmail.com'
    }
]

/* Convertimos la funcion en asincrona "async" */
const getUser1 = async (id) => {
    const user = users1.find(usuario => usuario.id == id)

    if (!user) {
        /* la sentencia "throw" como su nombre lo dice en español, lo que hace
        es lanzar una excepcion, en este caso una nuevo "new" mensaje de error "Error(`aqui`)" */
        throw new Error(`Doesn't exist an user with id ${id}`)
    } else {
        /* retornamos el dato */
        return user
    }
}

const getEmail = async (user) => {
    const email = emails.find(correo => correo.id == user.id)

    if (!email) {
        /* la sentencia "throw" como su nombre lo dice en español, lo que hace
        es lanzar una excepcion, en este caso una nuevo "new" mensaje de error "Error(`aqui`)" */
        throw new Error(`${user.name} hasn't email`)
    } else {
        /* Retornamos los datos */
        return ({
            id: user.id,
            name: user.name,
            email: email.email
        })
    }
}

/* Nueva funcion del tipo asincrona "async" con un parametro llamado "id", para 
llamar las otra dos de arriba y obtener sus resultado */
const getInfo = async (id) => {
    try { // intenta en ingles "try" hacer lo que esta dentro de el
        /* llamamos a la funcion "getUser1(id)" con la sentencia "await", para indicar
        que vamos a esperare a que termine esa funcion completamente, para que mas 
        adelante podamos obtener el usuario a través del "id" y guardemos el resultado 
        en la varible creada "user" */
        const user = await getUser1(id)

        /* llamamos a la funcion "getEmail1(id)" con la sentencia "await", para indicar
        que vamos a esperare a que termine esa funcion completamente, para que mas 
        adelante podamos obtener el email a través del "user" y guardemos el resultado 
        en la varible creada "res" */
        const res = await getEmail(user)

        /* retornamos los datos obtenidos de las dos funciones que llamamos */
        return `${user.name} email is ${res.email}`
    } catch (error) { // en caso de error captura en ingle "catch" el error  
        console.log(error);
    }

}

/* mandamos a llamar a la funcion "getInfo()" para obtener todos los datos del
usuario con "id" 3, tramos una promesa ".then()" donde creamos dentro de ella 
una funcion que se ejecutara son necesidad de ser llamada por otro lado, donde
creamos una variable temporal "res" donde por default tiene dentro ya la
informacion resultante y solo le indicamos que nos imprima a consola esa info */
getInfo(3)
    .then((res) => {console.log(res)})
/* FIN DEL USO DE PARTE DEL EJEMPLO DEL ARCHIVO LLAMADO "video36_promesas.js" */
/* FIN DEL SEGUNDO EJEMPLO */



