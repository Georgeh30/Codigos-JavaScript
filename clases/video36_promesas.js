/* Uso de las promesas en vez de usar callback
Una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en 
lugar de pasar callbacks a una función. */

/* Una promesa es un objeto con 2 callbacks internos, el resolve y reject */

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

/* Funcion para obtener el El registro completo de un usuario a través del id */
const getUser1 = (id) => {
    /* metodo ".find()" el cual sirve en este caso para devolver el registro del 
    primer id del usuario que encuentre y que sea igual al id obtenido por el 
    primer parametro llamado igualmente "id", NOTA: la variable "usuario" solo 
    es una variable temporal para que pueda recorrer el arreglo "users1" */
    const user = users1.find(usuario => usuario.id == id)

    /* Este es una promesa el cual ya viene pre-programado el parametro "resolve"
    , el cual se ejecuta cuando todo salga bien y el parametro "reject", el cual
    se ejecuta cuando algo salga mal, podemos hacer la variable "promise" como const y retornarla al final o sin poner const, poner return aqui mismo */
    return promise = new Promise((resolve, reject) => {
        /* para saber si existe el usuario */
        if (!user) { // si es diferente a true
            /* Solo ponemos el mensaje de error que no encontro el user */
            reject(`Doesn't exist an user with id ${id}`)
        } else { // si es igual a true
            /* ponemos el registro user obtenido */
            resolve(user)
        }
    })
}

/* Para obtener el registro completo del correo por medio del id que viene por parte del arreglo JSON users1 */
const getEmail = (user) => {
    /* obtenemos el registro del primer id que encuentre dentro de user.id que
    viene del llamado de la funcion "getUser1" */
    const email = emails.find(correo => correo.id == user.id)

    /* Este es una promesa el cual ya viene pre-programado el parametro "resolve"
    , el cual se ejecuta cuando todo salga bien y el parametro "reject", el cual
    se ejecuta cuando algo salga mal */
    return promise = new Promise((resolve, reject) => {
        /* para saber si existe el email que indicamos cuando llamemos a la funcion "getUser1()" dentro de sus parentesis poner el id */
        if (!email) {
            /* Solo ponemos el mensaje de error que no encontro el email */
            reject(`${user.name} hasn't email`)
        } else {
            /* ponemos el arreglo de objeto */
            resolve({
                /* obtenemos el id del arreglo JSON "users1" que viene de llamar esta funcion "getEmail()" dentro de la llamada a funcion del "getUser1()", el cual lo obtiene dentro de ella en una linea de codigo con la variable creada como "user" */
                id: user.id,
                name: user.name,
                email: email.email // el email lo obtenemos de la variable de arriba "email" que viene de obtenerlo del arreglo JSON "emails"
            })
        }
    })
}

/* Ahora llamamos la funcion "getUser1()" donde ".then()" es el metodo que resuelve el
contenido de la promesa, que en este caso creamos un  parametro "usuario1" y le 
indicamos que obtenga el registro del usuario obtenimo del id 2, despues ponemos 
otro ".then" para que lo que obtenga lo imprima y el ".catch" para los errores,
esto es la funcion principal de las promesas, ya que se puede ir encadenando 
varios ".then" con mas de una funcion dentro de la llamada a funcion... */
getUser1(2)
    .then(usuario1 => getEmail(usuario1)) // obtiene el arreglo del registro id 2
    .then(res => console.log(res)) // imprime el arreglo o solo un valor
    .catch(err => console.log(err)) // imprime mensaje de error si no existe el usuario
