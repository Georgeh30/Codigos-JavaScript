/* Uso de la API File
Esta API nos permite leer archivos que introduzcamos a través de un <input>
o a través de la API drag & drop */

/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.
        La interfaz más utilizada para interactuar con ella es "FileReader"
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

/* 
Evento "load" -> se dispara cuando un recurso y sus recursos dependientes han 
                 terminado de cargar.


*/

const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const images = document.getElementById('images')
const text = document.getElementById('text')

/* LEER Y MOSTRAR EL TEXTO DE UN ARCHIVO */
/* el evento "change" se activa cuando dejamos de seleccionar el objeto html 
dentro de la pagina web */
fileInput.addEventListener('change', (e) => {
    /* para imprimir el valor que contiene una de sus propiedades de la propiedad
    "target" que obtenemos del evento accionado para el elemento "fileInput" */
    // console.log(e.target.files);


    /* Obtenemos en la variable "file" el contenido que tiene la subpropiedad 
    "files" dando la posicion 0 */
    const file = e.target.files[0]

    /* Despues convertimos la variable "fileReader" a tipo "FileReader()" ya que 
    esto permite que las aplicaciones web lean ficheros */
    const fileReader = new FileReader()

    /* se usa para leer el contenido de un tipo Blob o File en este caso sera un
    "file" */
    fileReader.readAsText(file)

    /* Este evento "load" se ejecuta cuando ha terminado de leer en este caso todo el archivo */
    fileReader.addEventListener('load', (e) => {
        /* Asi obtenemos lo que hay dentro del archivo e imprimimos a consola
        "e.target.result" -> ingresa a las propiedades del evento "load" donde obtiene
        los valores de cada una de estas propiedades, del elemento "fileReader" */
        console.log(e.target.result);

        /* Indicaoms que inserte el contenido de texto en el elemento "text" a través
        de "e.target.result" */
        text.textContent = e.target.result
    })

})
/* FIN DE LEER Y MOSTRAR TEXTO DE UN ARCHIVO */


/* LEER Y MOSTRAR UNA IMAGEN */
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()

    /* aqui en vez de poner "readAsText()" ponemos ".readAsDataURL", igualmente
    usado para leer contendio "file" */
    fileReader.readAsDataURL(file)

    /* ahora con este evento hacemos que cargue lo que hay dentro hasta que alla
    terinado de leer todo el archivo */
    fileReader.addEventListener('load', (e) => {
        /* y por ultimo le indicamos que cree el atributo "src" y dentro de el
        poner la direccion de la imagen con ayuda del codigo "e.target.result", 
        despues que este nuevo atributo creado "src" lo inserte dentro de la etiqueta
        html que tiene el id "img", esto lo hacemos con ayuda del "img.setSttribute()" */
        img.setAttribute('src', e.target.result)
    })
})
/* FIN DE LEER Y MOSTRAR UNA IMAGEN */


/* LEER Y MOSTRAR VARIOS ARCHIVOS */
fileInput.addEventListener('change', (e) => {
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    
    /* Creamos el bucle para poder ir insertando cada archivo que hayamos
    seleccionado dentro de una nueva etiqueta que vayamos creando dentro del for
    y posteriormente mostrarlas en la pagina web */
    for (const file of files) {
        const fileReader = new FileReader()
        const img = document.createElement('IMG') // Creamos la etiqueta
        fileReader.readAsDataURL(file) // leemos el archivo
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result) 
        })
        fragment.appendChild(img) // insertamos dato obtenido en el fragmento
    }
    images.appendChild(fragment) // insertamos el framento en elemento html "images"
})
/* FIN DE LEER Y MOSTRAR VARIOS ARCHIVOS */
