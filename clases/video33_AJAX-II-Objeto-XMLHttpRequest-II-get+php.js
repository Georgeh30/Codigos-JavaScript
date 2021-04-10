/* USO DE AJAX II, TRAYENDO DATOS ARRAY JSON DESDE CODIGO PHP EL CUAL OBTIENE DE
UNA BASE DE DATOS CREADA EN PHPMYADMIN Y USANDO WAMPSERVER COMO SERVIDOR, PARA ELLO
SE METIO EL CODIGO DENTRO DE LA RUTA DONDE SE INSTALO EL WAMPSERVER LA CUAL ES:
"C:\wamp64\www" PARA QUE PUEDA FUNCIONAR EL SERVIDOR ARRANCAMOS EL WAMPSERVER CON
SOLO DAR DOBLE CLICK SOBRE EL ICONO "Wampserver64" Y DEBE DARNOS EN COLOR VERDE 
EL ICONO QUE APARESCA EN LA BARRA DE TAREAS */


const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

const getData = (id) => {
    let xhr;
    /* Evitar que NO funcion en navegadores viejos, cuando de true, sera navegador 
    que sí soporta "XMLHttpRequest()" y si es false es un navegador antiguo */
    if (window.XMLHttpRequest) {
        /* Si es navegador que sí soporta "XMLHttpRequest()" lo guardara */
        xhr = new XMLHttpRequest()
    } else {
        /* Si NO es navegador que soporta "XMLHttpRequest", guardara 
        "ActiveXObject('Microsoft.XMLHTTP')" */
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    /* Indica que sí el "id" es undefined, es porque no estamos haciendo una 
    solicitud desde el formulario, si no que estamos cargando la pagina por 
    primera vez */
    if (id == undefined) {
        /* Y entonces hacemos la peticion tipo GET al archivo php 
        "video33_AJAX-II-Objeto-XMLHttpRequest-II-get+php.php" */
        xhr.open('GET', '/php/video33_AJAX-II-Objeto-XMLHttpRequest-II-get+php.php')

         /* Escuchar el evento "load", para saber cuando la peticion a llegado y
        creamos un parametro en la funcion creado en el parametro dos y dentro de 
        la funcion guardamos en la variable "data" los datos obtenidos de la pagina */
        xhr.addEventListener('load', (data) => {
            /* obtenemos los datos en tipo string "data.target.response", le damos un
            parseo "JSON.parse()" y lo guardamos en una variable "dataJSON" */
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON);
            /*  */


        })

    } else {

    }

    xhr.send()

}

getData()













