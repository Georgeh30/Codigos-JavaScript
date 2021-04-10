/* Uso de la API Geolocation
Para saber la ubicacion de nuestro navegador
*/

/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/


const button = document.getElementById('button')

/* evento "click" para cuando de click al boton "button" se accione */
button.addEventListener('click', () => {
    /* cremoa la variable para guardar la geolocalizacion */
    const geolocation = navigator.geolocation

    /* con el metodo ".getCurrentPosition()", para obtener la posicion
    actual a través de 3 parametros
    estructura ---> ".getCurrentPosition(posicion, error, opciones)" */
    geolocation.getCurrentPosition(getPosition, error, options)
})

/*  */
const options = {
    enableHightAccuracy: true,
    timeout: 5000, // timpo para que nos devuelva la posicion
    maximunAge: 0 // duracion que permitimos tener algo en caché
}

/* funcion que obtiene la posicion */
const getPosition = (position) => {
    console.log(position)

}

/* para obtener el error en caso de que alla un error */
const error = (error) => console.log(error)
