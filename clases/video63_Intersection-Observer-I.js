/* Uso de la API Intersection Observer 
Se usa como por ejemplo, en instagram cuando queremos ver imagenes y pero son muchas
entonces lo que hace es cargar algunas cuantas y como vayamos desplazandonos (scroll)
hacia abajo, eotnces va a ir cargando mas, entonces esta api, sirve para cargar cierto 
numero de imagenes poco a poco.
*/


/* guardamos en "boxes" la consulta en todos los selectores del css para encontra
el que se llame ".box" y hacer una conexion a los div */
const boxes = document.querySelectorAll('.box')

/* Funcion para la llamada de vuelta (callback) con un parametro "entries" */
const callback = (entries) => {
    /* Realizamos un "forEach" donde obtenemos el valor dentro del "entries", el
    cual al crear la variable temporal "entry" por default va interando posicion
    por poscicion */
    entries.forEach(entry => {
        /* en caso de que este dentro del valor de la posicion interada,
        el cual preguntamos si estamos viendo en pantalla ese elemento interado */
        if (entry.isIntersecting) {
            /* Entonces, imprimimos el texto contenido dentro del id del elemento
            que estamos viendo en pantalla */
            console.log(entry.target.id, 'is intersecting')
        }
    })
}

/* cremos un objeto el cual servira para pasarle los valores como observa o cuando
detectara cada elemento al momento de desplazarnos */
const options = {
    // root:
    // rootMargin: '-200px'
    threshold: 0.5 // para que detecte en la pagina elemento hasta que este la mitad visible
}

/* vamos a observar, parametro 1 es para agregar la funcion, y el 2 para pasarle
las caracteristicas como se observara los elementos */
const observer = new IntersectionObserver(callback, options)

/* hacemos un "forEach" obteniendo dentro de la variable temporal "element" 
, cada uno de los elementos dentro del "boxes" para observar, cada uno de los
elementos o etiquetas y podamos saber cuando estan en la zona de la pagina web
donde se vean o cuando no se vean */
boxes.forEach(element => observer.observe(element))







