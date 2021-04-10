/* Uso del Callback - El callback es una FUNCION que se ejecuta a través de otra FUNCION
Los callbacks no son asincronos, osea que SÍ se ejecutan en orden */

const getUser = (id, cb) => {
    const user = {
        name: 'Jorge',
        id: id
    }

    /* LLamamos a la funcion callback, ingresamos los dos parametros porque la
    funcion la creamos abajo dentro del segundo parametro de getUser que llamamos */
    if (id == 2) {
        cb('User not Exist') // indicamos solo el primer parametro err
    } else {
        cb(null, user) // indicamos null en err y user que es el JSON de arriba como user
    }

}

/* Llamamos la funcion getUser donde tiene dos parametros, el primero que es el id
y el segundo es el parametro cb que es para crear una funcion que aqui es donde 
se le llama callback */
getUser(1, (err, user) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(`User name is ${user.name}`);
    }
})


/* EJEMPLO 2 */

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

const getUser1 = (id, cb) => {
    /* metodo ".find()" el cual sirve en este caso para devolver el registro del 
    primer id del usuario que encuentre y que sea igual al id obtenido por el 
    primer parametro llamado igualmente "id", NOTA: la variable "usuario" solo 
    es una variable temporal para que pueda recorrer el arreglo "users1" */
    const user = users1.find(usuario => usuario.id == id)

    /* para saber si existe el usuario */
    if (!user) {
        /* Solo ponemos el 1° parametro dando el mensaje de error que no encontro el user */
        cb(`Not Exist a user with id ${id}`)
    } else {
        /* ponemos null en el 1° parametro para que no de error y el registro user obtenido */
        cb(null, user) 
    }

}

/* Para obtener el correo */
const getEmail = (user, cb) => {
    /* obtenemos el registro del primer id que encuentre dentro de user.id */
    const email = emails.find(correo => correo.id == user.id)
    
    /* si no obtuvo un registro el "email" */
    if (!email) {
        /* muestra mensaje de error */
        cb(`${user.name} hasn't email`)
    } else { /* si obtiene un registro el "email" */
        /* llamamos la funcion callback que viene siendo la funcion que esta dentro
        de la llamada a la funcion "getEmail" que esta dentro de la funcion "getUser1"
        , le pasamos al 1° parametro null porque no hay error y el 2° parametro un 
        arreglo de objetos */
        cb(null, {
            /* obtenemos el id que viene de la llamada al "getUser1" el cual obtiene 
            de la funcion creada de "getUser1" que dentro de ella la obtiene de la
            variable "user" que esta variable la obtiene del arreglo global "users1" 
            y asi es tambien para el "name" */
            id: user.id, 
            name: user.name,
            email: email.email // el email lo obtenemos de la variable de arriba "email"
        })
    }
}

/* Ahora llamamos la funcion "getUser1" donde tiene como 2° parametro la variable
"cb" para poder agregar en ella otra funcion donde es cuando se le llama callback */
getUser1(2, (err, user) => { // la funcion callback tiene 2 parametros el "err" y "user"
    if (err) {
        return console.log(err);
    } else {
        /* mandamos a llamar a la funcion "getEmail" dando como 1° parametro el 
        "user" y como 2° parametro la funcion que creamos callback */
        getEmail(user, (err, res) => {
            if (err) {
                return console.log(err);
            } else {
                getEmail(user, (err, res) => {
                    if (err) {
                        return console.log(err);
                    } else {
                        console.log(res);
                    }
                })
            }
        })
    }
})
