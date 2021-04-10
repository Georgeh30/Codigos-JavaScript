/* Uso de la libreria Axios hace lo mismo que AJAX */
/* De igual manera usamos la direccion 'https://jsonplaceholder.typicode.com/users' 
de la API "jsonplaceholder" para obtener por el metodo GET los datos que ofrece la pagina */

const button = document.getElementById('button')

/* ESTE ES EL CODIGO FETCH EN AJAX QUE SE USO EN EL ARCHIVO 
"video_AJAX-IV-Fetch-Introduccion-GET.js" */
//res = response = respuesta
/* button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
}) */


/* EJEMPLO CON LA LIBRERIA "Axios" */
/* metodo ".addEventListener()" para el boton "button", en el cual se usa el 
evento "click" para cuando el usuario de click al boton, en este caso obtenga los
datos de la url indicada y los muestre en la pagina web en forma de lista.
Estructura ".addEventListener('evento', funcion)" */
button.addEventListener('click', () => {
    /* metodo "axios" */
    axios({
        method: 'GET', // indicamos que tipo de metodo usaremos
        url: 'https://jsonplaceholder.typicode.com/users' // la url de la pagina donde obtendremos los datos
        /* le damos una promesa ".then()" y dentro creamos un metodo para que se accione con el contenido dentro de él */
    }).then((res) => {
        /* Creamos la variable "list" para conectarse al atributo id "list" 
        de la etiqueta html que la contiene */
        const list = document.getElementById('list')

        /* Creamos la variable "fragment" con la inicializacion de metodo 
        para fragmentacion de documento */
        const fragment = document.createDocumentFragment()

        /* bucle "forof" para interar en cada objeto de los datos obtenidos 
        de la url */
        for (const userInfo of res.data) {
            /* guardamos una nueva etiqueta html, dentro de la variable "listItem" */
            const listItem = document.createElement('LI')

            /* insertamos dentro de la etiqueta nueva creada "listItem" el texto con 
            los campos del "id" y "name" de cada objeto interado */
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`

            /* insertamos dentro de "fragment" cada uno de las nuevas etiquetas creadas */
            fragment.appendChild(listItem)
        }
        /* insertamos el fragmento ya con todas las etiquetas dentro de "list" que es la 
        etiqueta que existe en el html */
        list.appendChild(fragment)

        /* damos un "catch" del objeto promesas, esto es para 
        capturar el error en caso de exitir alguno */
    }).catch((err) => { console.log(err) }) // imprime el error
})







