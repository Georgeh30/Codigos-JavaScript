/* Uso de la API Intersection Observer
En este caso lo usamos como carga perezosa (lazy load), el cual a lo que se refiere
es que vamos a ir cargando mas imagenes conforme vayamos desplazando hacia abajo las
imagenes que esten visibles en la pagina web
*/


const images = document.getElementById('images')

/* Funcion para obtener las Imagenes */
const getImages = () => {
    /* Usamos el Metodo "axios" que es lo mismo que hace AJAX, el cargar en 
    este caso imagenes de manera asincrona, osea sin recargar la pagina, 
    que en este caso ponemoes al final de la url "?page=3&limit=5", el cual
    el 5 indica que solo obtendremos 5 campos del Objeto JSON de la url */
    axios('https://picsum.photos/v2/list?page=3&limit=5') // url de donde vamos a obtener las imagenes
        .then(res => { // esta promesa donde obtenemos los datos en la variable tempoal "res"
            /* Creamos un fragmento */
            const fragment = document.createDocumentFragment()

            /* un "forEach" para recorrer los datos obtenidos de la URL */
            res.data.forEach(element => {
                /* creamos la etiqueta <img></img> */
                const newImage = document.createElement('IMG')

                /* Insertamos el valor del campo de la clave "download_url" de
                los datos JSON obtenidos de la url, dentro del atributo "src"
                de la etiqueta nueva que vamos creando arriba */
                newImage.src = element.download_url

                /* vamos insertando las nuevas etiquetas que vamos creando */
                fragment.appendChild(newImage)
            })
            /* Insertamos el fragmento dentro de la etiqueta con el id "imagenes" */
            images.appendChild(fragment)

            /* llamamos la funcion "setObserver" */
            setObserver()
        })
}

/* Funcion para poder recorrer las entradas */
const callback = (entries) => {
    /* recorremos las entradas */
    entries.forEach(entry => {
        
        /* y cada ves que detecte la interseccion con la ultima imagen */
        if (entry.isIntersecting) {
            getImages() // llama la funcion para insertar mas imagenes
        } else {
            //quitar animación
        }
    })
}

/* Funcion para detectar las imagenes que se vean en la pagina web */
const setObserver = () => {
    const options = {
        threshold: 0.5 /* para cuando estemos viendo la mitad de la img */
    }

    /* observar cambios en la intersección de un elemento, con ayuda de la funcion
    "callback" y el objeto "options" para modificar la forma como observa y detecta */
    const observer = new IntersectionObserver(callback, options)

    /* le decimos que es lo que vamos a observar, y que solo observe la ultima imagen
    del numero de imagens que aparecen en la pagina que serian 5 */
    observer.observe(images.lastElementChild)
}

/* llamamos a la funcion para obtener las imagenes de la url y se muestren al
cargar la pagina */
getImages()





