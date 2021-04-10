/* Uso de la API File
Muestra de una barra de progreso */

const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

/* EJEMPLO 1 DE CARGA DE LA PRIMERA BARRA DE PROGRESO */
/* detectamos cuando a cambiado "change" de seleccionar el elemento "fileInput" */
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0] /* localizamos el archivo que hemos subido */
    const fileReader = new FileReader() /* creamos el objeto "FileReader" */

    fileReader.readAsDataURL(file) /* lo leemos con "readAsDataURL()", el "file" */

    /* para controla el progreso de la barra de progreso al subir un archivo */
    fileReader.addEventListener('progress', (e) => {
        console.log(e.loaded); /* loaded -> indica cuanto lleva cargado */
        console.log(e.total); /* total -> indica el total que pesa */

        /* le decimos que en el elemento html con id "progress", vamos a modificar
        el estilo que tiene por default ó el estilo qwue tenga modificado por una 
        clase que venga de un selector dentro de css, en este caso la modificacion 
        se pide que sea del ancho con el codigo ".style.wdth", guardaremos en el 
        ancho el tiempo que lleva de carga el archivo subido, pero lo parseamos a 
        entero y lo convertimos a porcentaje */
        progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'

        /* Asi se calcula el porcentaje */
        console.log(e.loaded * 100 / e.total);
    })

    /* evento "loadend" para que se active cuando ya este cargado un archivo */
    fileReader.addEventListener('loadend', (e) => {
        /* cambiamos el valor del estilo del ancho a 100% cuando se active
        este metodo al momento que detecte que ya se cargo el archivo subido,
        esto es solo por si no llega la barra a llenarse al 100%, lo hacemos aqui */
        progress.style.width = '100%'

        /* Imprimimos en consola cuando se active e4ste evento al momento de que se
        complete la carga del archivo que subamos */
        console.log('cargado!!');
    })

})
/* FIN DEL EJEMPLO 1 DE CARGA DE LA PRIMERA BARRA DE PROGRESO */


/* Esta es la raiz del rchivo html, osea que podemos ingresar al ":root" del css */
const root = document.documentElement

/* EJEMPLO 2 DE CARGA DE LA SEGUNDA BARRA DE PROGRESO */
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        /* para modificar en css la varable que creamos dentro del ":root"
        pasandole el nombre de la variable "--bar-width" y el valor de carga en porcentaje */
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    fileReader.addEventListener('loadend', () => {
        root.style.setProperty('--bar-width', '100%')
    })
})
/* FIN DEL EJEMPLO 2 DE CARGA DE LA SEGUNDA BARRA DE PROGRESO */
