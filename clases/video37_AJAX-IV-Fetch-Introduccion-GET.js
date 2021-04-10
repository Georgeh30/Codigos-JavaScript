/* Uso de Fetch para AJAX */

/*
    Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
    Está basado en promesas, por lo cual tiene un response y un reject internos y se puede usar el ".then()"
        Response tiene varios métodos
        array​Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
        clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
        form​Data(): Se utiliza para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8
        //Comprobación de soporte FETCH
            if (window.fetch != undefined) console.log('FETCH OK')
            else console.log('FETCH NOT WORKS!')
*/


const button = document.getElementById('button')

/* EN ESTE EJEMPLO, HACE QUE OBTENGAMOS LOS DATOS DE LA PAGINA "https://jsonplaceholder.typicode.com/users" 
EN EL PRIMER ".then()" O QUE OBTENGAMOS EL MENSAJE DE ERROR EN CASO DE ERROR AL CONECTARSE A LA PAGINA INDICADA,
EN EL SEGUNDO ".then()" QUE CONVIERTA LOS DATOS A TIPO JSON Y EN EL 3° ".then()" QUE LOS IMPRIMA A CONSOLA */
/* button.addEventListener('click', () => {
    /* PETICION POR GET */
    /* Abriendo la conexion con la ruta donde se encuentra los datos tipo arreglo json,
    no se necesita indicar el metod "GET", porque fetch lo tiene por default en "GET" 
    fetch('https://jsonplaceholder.typicode.com/users')
        /* Aqui dice que en caso de ser "true" la propiedad "ok" de todas las 
        propiedades obtenidas como respuesta de la pagina indicada arriba 
        debe obtener en la variable temporal "res" los datos de la pagina con 
        ".reslve(res)" y en caso de dar "false" la propiedad "ok", que 
        obtenga el mensaje de error con ".reject(res)" 
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        /* Entonces indicamos que en la nueva variable temporal "res" obtengamos 
        los datos del anterior ".then" y despues los convierta a tipo json 
        .then(res => res.json())
        /* Para que al final indiquemos con la otra vez nueva variable 
        temporal "res" que imprima los datos en consola 
        .then(res => console.log(res))

}) */


/* SEGUNDO EJEMPLO */
button.addEventListener('click', () => {
    /* PETICION POR GET */
    /* Abriendo la conexion con la ruta donde se encuentra los datos tipo arreglo json,
    no se necesita indicar el metod "GET", porque fetch lo tiene por default en "GET" */
    fetch('https://jsonplaceholder.typicode.com/users')
        /* Aqui dice que en caso de ser "true" la propiedad "ok" de todas las 
        propiedades obtenidas como respuesta de la pagina indicada arriba 
        debe obtener en la variable temporal "res" los datos de la pagina con 
        ".reslve(res)" y en caso de dar "false" la propiedad "ok", que 
        obtenga el mensaje de error con ".reject(res)" */
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        /* Entonces indicamos que en la nueva variable temporal "res" obtengamos 
        los datos del anterior ".then" y despues los convierta a tipo json */
        .then(res => res.json())
        /* Indicamos que en la variable temporal "res" que es donde obtuvimos los datos 
        del anterior ".then()", la usemos para ir acomodando los datos dentro de etiquetas 
        html que iremos creando mas adelante */
        .then(res => {
            /* creamos la variable "list" y obtenemos en ella la conexion de id "list" */
            const list = document.getElementById('list')
            
            /* creamos la variable "fragment" para mas adelante insertar en el los 
            codigos html que crearemos */
            const fragment = document.createDocumentFragment()

            /* en el bucle "forof" vamos interando en cada dato obtenido del "res" */
            for (const userInfo of res) {
                /* creamos la variable "listItem para insertar en ella la nueva etiqueta "<li></li>" */
                const listItem = document.createElement('LI')

                /* Despues indicamos que inserte en esta etiqueta los datos "id" y "name" de cada
                uno de los datos que vamos interando con la variable "userInfo" */
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`

                /* ahora que tenemos cada uno de los datos dentro de la etiquetas html,
                los vamos insertando dentro del fragmento de document html creado "fragment" */
                fragment.appendChild(listItem)
                
            }
            /* Y por ultimo este "fragment" ya que tenga cada uno de los datos, los insertamos
            dentro de la etiqueta html con la que estamos conectando con el id "list" */
            list.appendChild(fragment)
        })

})
