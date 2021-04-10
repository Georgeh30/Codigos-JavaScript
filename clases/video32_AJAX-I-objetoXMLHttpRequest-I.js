/* USO DE AJAX CON AYUDA DE LA PAGINA DE LA API JSONPlaceholder */

/* YA QUE AJAX NECESITA DEL SERVIDOR PARA HACER PETICIONES, USAREMOS UNA API "JSONPlaceholder"
PARA DESARROLADORES QUE HACE PETICIONES O PRUEBAS CON AJAX, QUE EN ESTE CODIGO SOLO OBTEMOS 
LA URL DE ESTA PAGINA DE API "JSONPlaceholder" PARA OBTENER LOS DATOS TIPO "ARREGLO JSON" 
PARA INSERTARLOS EN NUESTRO HTML SIN QUE RECARGUE LA PAGINA, PORQUE EN ESTA API TIENE 
PRECARGADO RUTAS CON DATOS TIPO JSON Y OTRAS COSAS. */

/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_
hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/
Web/HTTP/Status */

/* 
+ UN OBJETO JSON ES: 
let json = {
    nombre: 'jorge', apellido: 'alvarado'
} 

+ UN ARREGLO DE OBJETOS JSON:
let ajson = [
    {nombre: 'jorge', apellido: 'alvarado'},
    {nombre: 'josue', apellido: 'dominguez'}
]
*/

/* El método "GET" permite al navegador guardar los datos tal como los recibe, 
mientras que "POST" permite modificar los datos o descargarlos más adelante. 
Lo escribiremos entre comillas. */

/* El objeto XMLHttpRequest, nos permite la transferecia de datos desde la 
página al servidor y viceversa. 
Por tanto nos sirve tanto para incorporar datos en la página que tengamos en 
otros archivos del servidor, como para mandar datos de la página al servidor, 
y todo esto de forma asíncrona y sin tener que recargar la pagina ya que permite
mandar datos en segundo plano. */

const button = document.getElementById('button')

/* Evento de escucha, para saber cuando de un click */
button.addEventListener('click', () => {
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

    /* PETICION POR GET */
    /* Abriendo la conexion con la ruta donde se encuentra los datos tipo arreglo json */
    /* Metodo del objeto "XMLHttpRequest.open('metodo-get,post', 'url')" */
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    /* Escuchar el evento "load", para saber cuando la peticion a llegado y
    creamos un parametro en la funcion creado en el parametro dos y dentro de 
    la funcion guardamos en la variable "data" los datos obtenidos de la pagina */
    xhr.addEventListener('load', (data) => {
        /* nos imprime los datos obtenidos de la pagina */
        // console.log(typeof data.target.response); // devuelve el tipo de variable que es
        
        /* obtenemos los datos en tipo string "data.target.response", le damos un
        parseo "JSON.parse()" y lo guardamos en una variable "dataJSON" */
        const dataJSON = JSON.parse(data.target.response);

        const list = document.getElementById('list')

        /* Para recorrer cada uno de los datos */
        for (const userInfo of dataJSON) {
            /* creamos una nueva etiqueta (nodo o elemento) <li></li> guardada en 
            la variable "listItem" */
            const listItem = document.createElement('LI')

            /* Dentro del elemento nuevo creado, insertamos texto ".textContent", 
            en este caso guardamos el valor de la clave "id" y "name" de cada usuario */
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`

            /* Y este nuevo elemento creado lo insertamos dentro de la etiqueta 
            (elemento o nodo) que ya existe dentro del DOM HTML el cual es: 
            <ul id="list"></ul> */
            list.appendChild(listItem)
        }

    })

    /* Enviando la conexion, dicho de otra manera, Envia la petición al servidor. */
    xhr.send()
})
