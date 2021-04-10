/* Uso de la API Online/Offline
Para saber cuando esta desconectado y conectado a internet
*/


const alert = document.getElementById('alert')

/* Evento "online" para accionarse cuando tengamos internet */
addEventListener('online', (e) => {
    setAlert(1)  // llamamos a la funcion de abajo
})

/* Evento "offline" para accionarse cuando NO tengamos internet */
addEventListener('offline', (e) => {
    setAlert(0)  // llamamos a la funcion de abajo
})

/* creamos esta funcion con un parametro a pasar */
const setAlert = (status) => {
    /* Quitasmos las clases "alert--online" en caso de que la tenga la etiqueta
    html con id "alert" */
    alert.classList.remove('alert--online')

    /* Quitasmos las clases "alert--offline" en caso de que la tenga la etiqueta
    html con id "alert" */
    alert.classList.remove('alert--offline')

    /* si el estatus es 0, que quiere decir que esta en "offline" */
    status === 0 ?
        /* Usamos el metod "setTimeout()" y dentro 1° el parametro de funcion
        y en el 2° parametro el numero 100 */
        setTimeout(() => {
            /* insertamos el texto siguiente, dentro del elemento con id "alert" */
            alert.textContent = "Ups, it seems you're offline"

            /* Ahora añadimos la clase "alert--offline" creada en css */
            alert.classList.add('alert--offline')
        }, 100) : 
        setTimeout(() => {
            /* insertamos el texto siguiente, dentro del elemento con id "alert" */
            alert.textContent = "Great, You're online again!"

            /* Ahora añadimos la clase "alert--online" creada en css */
            alert.classList.add('alert--online')
        }, 100)
}




