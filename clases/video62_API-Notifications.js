/* Uso de la API Notifications 
Para dar notificaciones tipo whatsapp web que pide permisos para dar notificaciones
y una vezs los des, te notifica en la parte inferior derecho del sistema windows
por parte del google chrome
*/

/* 
https://developer.mozilla.org/es/docs/Web/API/notification 
icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/


const permissions = document.getElementById('permissions')

/* evento "click" para que se accione cuando de click en el boton "permisions" */
permissions.addEventListener('click', () => {
    /* en caso de que el valor dentro de "Notification.permission" sea diferente
    de "granted" el cual abre una ventana en el navegador pidiendo permiso para
    enviar notificaciones */
    if (Notification.permission !== 'granted') {
        /* llamamos al metodo siguiente */
        getPermissions()
    } else {
        /* en caso de que SI tenga permiso, entonces llamamos a la siguiente funcion */
        notify()
    }
})

/* Funcion para obtener los permisos por parte del sistema windows */
const getPermissions = () => {
    /* Devuelve una promesa, el cual sirve para probar si tiene permiso o no */
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

/* Funcion para mostrar y la info que se mostrara en la notificacion */
const notify = () => {
    /* Objeto con cada campo para usarlo en la notificacion */
    const options = {
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        icon: '../img/world.png', // ruta para agregar imagen a la notificacion
        data: 'Extra data', // para poner datos extras que no aparece
        tag: 'notification demo' // ponemos una etiqueta
    }

    /* variable donde guardamos el objeto notificacion con la info que muestra
    como 1° parametro, el titulo y en el 2° parametro el objeto "options*/
    const notification = new Notification('Hello World', options)

    /* evento "close" para que se acciones cuando se cierra la notificacion */
    notification.addEventListener('close', () => console.log('CLOSE'))

    /* evento "show" para que se acciones cuando se abre la notificacion */
    notification.addEventListener('show', () => console.log('SHOW'))

    /* Imprimimos el mensaje correspondiente, cuando se abre, la notificacion
    o cuando se cierra la notificacion */
    console.log(notification)
}
