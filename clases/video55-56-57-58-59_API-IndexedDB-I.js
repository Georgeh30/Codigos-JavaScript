/* Uso de la API IndexedDB se creara una base de datos
Es una manera de almacenar datos dentro del navegador del usuario. 
Debido a que permite la creación de aplicaciones con habilidades de consulta 
enriquecidas, con independencia de la disponibilidad de la red, sus aplicaciones 
pueden trabajar tanto en línea como fuera de línea.

Diferencia de LocalStorage vs IndexedDB:
    Es que en el primero solo sirve para porciones pequeñas de datos y el segundo 
    puede guardar porciones mucho mas grandes y se guardan en el disco duro y es
    orientada a objetos, noSQL.


metodo "open()" y objeto "indexedDB" es por medio de ellos que se crea la BD 

metodo "onupgradeneeded()" para saber si la BD existe, pero si no existe la crea con
                           el nombre que pusimos para buscarle

metodo "createObjectStore()" para almacenar los objetos

metodo "onsucces()" para saber si todo ha ido bien

metodo "oneerror()" para saber si hubo un error

Para ver los objetos de la BD almacenados desde la consola:
Existe un apartado en el navegador web cuando queremos inspeccionar codigo, 
que se llama "Application", al entrar, en la parte izquierda seleccionamos 
la opcion llamada "IndexedDB" en la que nos mostrara la info de la BD creada

*/

//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

/*
    Contenido extra para buscar:
        Método getAll() para obtener todos los registros de la base de datos
        Método clear() para borrar objetos del almacen
        Método deleteDatabase() para borrar la base de datos
        Metodo onBlocked() para bloquear bases de datos en los cambios de version
        Objeto IDBKeyRange para búsquedas en la base de datos
        Método createIndex() para la creación de índices en la base de datos
        Versionado de bases de datos
        
        Libreria indexedDB
            https://dexie.org/
*/


/* creamos una variable para almacenar el acceso a "indexedDB" */
const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

/* si "indexedDB" y "form" existe... */
if (indexedDB && form) {
    let db // variable para almacenar la BD mas adelante

    /* 
    Estructura del Metodo -> ".open('nombre de la BD', N° de Version de la BD)",
    el cual nos sirve para acceder a la BD
    */
    const request = indexedDB.open('taskList', 1)

    /* 
    SINTAXIS de los metodos "onsuccess", "onupgradeneeded" y "onerror"
        request.onsuccess = function(event) { ... };
        request.onupgradeneeded = function(event) { ... };
        request.onerror = function(event) { ... };

        Ó

        request.onsuccess = (event) => { ... };
        request.onupgradeneeded = (event) => { ... };
        request.onerror = (event) => { ... };

    NOTA: estas sintaxis explicandolas en palabras seria que estamos 
          creando una funcion y la estamos guardando dentro de cada metodo,
          esto es lo mismo cuando creamos una funcion con la nueva sintaxis,
          ya que de igual forma estamos creando una funcion y guardandola o 
          asignadole un nombre de variable ejemplo:
          const funcionNueva = () => { ... } 
          ó a la manera antigua
          function nombreFuncion() { ... }
          solo que en esa, ya le asignamos nombre dentro de la sintaxis
    */


    /* Se ejecuta solo una vez, solo cuando se crea la primera vez la BD */
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db);

        /* Llamamos a la funcion "readData()" aqui dentro, porque como es 
        asincrono, debemos llamarla cuando abrimos la BD */
        readData()
    }

    /* Para saber si necesita actualazacion, aqui es donde se metera la mayoria 
    del codigo, porque en este metodo se usa para validar que esta creada la BD
    , asi como para crear la BD en caso que no exista y para Actualizarla */
    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db);

        /* Creamos nuestra tabla (Almacen de Datos) asignandole como nombre 
        "tasks" y guardandola en una variable "objectStore". */
        const objectStore = db.createObjectStore('tasks', {
            /* para que por default le asigne una 
               key a cada elemento que agregemos a la
               tabla. */
            // autoIncrement: true

            /* esta opcion es para añador como key, en este caso el primer 
            campo del objeto que añadiremos que tiene como nombre de su
            clave "taskTitle", esto es para que sea clave UNICA */
            keyPath: 'taskTitle'
        })
    }

    /* Para saber si hubo un error */
    request.onerror = () => {
        console.log('Error', error);
    }

    /* Para añadir los datos */
    const addData = (data) => {
        /* estructura de "db.trnsaction(['tabla'])" sin poner el segundo parametro, se da por default que es "readonly"
        estructura cpn dos parametros definidos es "db.trnsaction(['tasks'], 'readwrite')", el cual es para poder leer y escribir. */
        const transaction = db.transaction(['tasks'], 'readwrite')

        /* Para abrir el almacen de objetos (tabla) llamada "tasks" */
        const objectStore = transaction.objectStore('tasks')

        /* Para Añador los datos que llegan por parametro llamado "data" */
        const request = objectStore.add(data)

        /* llamamos nuevamente aque dentro a la funcion "readData()", para
        que los nuevos resgistros que se añaden en la pagina, se muestren */
        readData()

    }

    /* funcion para que nos de la informacion sobre el elemento que vamos a actualizar por medio de la key */
    const getData = (key) => {
        /* estructura de "db.trnsaction(['tabla'])" sin poner el segundo parametro, se da por default que es "readonly", que solo es leer.
        Estructura con dos parametros definidos es "db.trnsaction(['tasks'], 'readwrite')", el cual es para poder leer y escribir. */
        const transaction = db.transaction(['tasks'])

        /* Para abrir el almacen de objetos (tabla) llamada "tasks" */
        const objectStore = transaction.objectStore('tasks')

        /* al pasarle la "key" nos dara el valor de "value" */
        const request = objectStore.get(key)

        /* llamado a "onsuccess" evaluamos si ya ha terminado */
        request.onsuccess = () => {
            /* con esto metemos el valor de la clave "taskTitle" dentro del
            atributo "value" de la etiqueta "input" a traves del atributo "name" es por donde indicamos que lo insertemos en el con 
            "form.task" */
            form.task.value = request.result.taskTitle

            /* con esto metemos el valor de la clave "taskTitle" dentro del
            atributo "value" de la etiqueta "select" a traves del atributo "name" es por donde indicamos que lo insertemos en el con 
            "form.priority" */
            form.priority.value = request.result.taskPriority

            /* cambiamos el valor del atributo "data-action" a través del
            "form.button.dataset.action", al valor "update" para que sepa
            el boton que ahora lo quer va hacer, es actualizar un registro */
            form.button.dataset.action = 'update'

            /* para que cambie el texto qe aparece dentro del boton "Add Task" 
            al texto "Update Task" */
            form.button.textContent = 'Update Task'
        }

    }

    /* Para actualizar los datos */
    const updateData = (data) => {
        /* estructura de "db.trnsaction(['tabla'])" sin poner el segundo parametro, se da por default que es "readonly"
        estructura cpn dos parametros definidos es "db.trnsaction(['tasks'], 'readwrite')", el cual es para poder leer y escribir. */
        const transaction = db.transaction(['tasks'], 'readwrite')

        /* Para abrir el almacen de objetos (tabla) llamada "tasks" */
        const objectStore = transaction.objectStore('tasks')

        /* Para actualizar los datos que llegan por parametro llamado "data" */
        const request = objectStore.put(data)

        /* para asegurarnos de que los datos se hayan actualizados, le decimos
        con este metodo "onsuccess" que haga lo que esta dentro de las llaves{}
        cuando haya terminado de actualizar el dato o registro */
        request.onsuccess = () => {
            /* para que una vez que hayamos actualizado los datos, cambie el valor
        del atributo html "data-action" al valor "add" */
            form.button.dataset.action = 'add'

        /* Para que cambie el texto del boton "Update Task" al texto "Add Task" */form.button.textContent = 'Add Task'

            /* llamamos nuevamente aque dentro a la funcion "readData()", para
            que los nuevos resgistros que se añaden en la pagina, se muestren */
            readData()
        }

    }

    /* Para borrar un registro */
    const deleteData = (key) => {
        /* estructura de "db.transaction(['tabla'])" sin poner el segundo parametro, se da por default que es "readonly"
        estructura cpn dos parametros definidos es "db.trnsaction(['tasks'], 'readwrite')", el cual es para poder leer y escribir. */
        const transaction = db.transaction(['tasks'], 'readwrite')

        /* Para abrir el almacen de objetos (tabla) llamada "tasks" */
        const objectStore = transaction.objectStore('tasks')

        /* Para borrar los datos que llegan por parametro llamado "key" */
        const request = objectStore.delete(key)

        /* para asegurarnos de que los datos se hayan borrado, le decimos
        con este metodo "onsuccess" que haga lo que esta dentro de las llaves{}
        cuando haya terminado de actualizar el dato o registro */
        request.onsuccess = () => {
            /* llamamos nuevamente aque dentro a la funcion "readData()", para
            que los nuevos resgistros que se añaden en la pagina, se muestren */
            readData()
        }

    }

    /* Para leer los datos */
    const readData = () => {
        /* estructura de "db.trnsaction(['tabla'])" sin poner el segundo parametro, se da por default que es "readonly", que solo es leer.
        Estructura con dos parametros definidos es "db.trnsaction(['tasks'], 'readwrite')", el cual es para poder leer y escribir. */
        const transaction = db.transaction(['tasks'])

        /* Para abrir el almacen de objetos (tabla) llamada "tasks" */
        const objectStore = transaction.objectStore('tasks')

        /* Para leer los registro en la tabla y nos devuelve la informacion */
        const request = objectStore.openCursor()

        /* Creamos un fragmento que usaremos dentro de "onsuccess" de abajo */
        const fragment = document.createDocumentFragment()

        /* despues debemos de ver que todo alla ido bien, usando
        aqui dentro otra vez el metodo "onsuccess" */
        request.onsuccess = (e) => {
            /* guardamos el valor del cursor */
            const cursor = e.target.result; // ya que "target" es el cursor.

            /* sí cursor existe */
            if (cursor) {
                /* Creamos el elemento "<p></p>" */
                const taskTitle = document.createElement('P')
                /* metemos dentro de este elemento el texto obtenido el valor 
                de la clave "taskTitle"  */
                taskTitle.textContent = cursor.value.taskTitle
                /* creamos el fragmento donde meteremos cada elemento creado */
                fragment.appendChild(taskTitle)

                /* Creamos un segundo elemento "<p></p>" */
                const taskPriority = document.createElement('P')
                /* metemos dentro de este elemento el texto obtenido el valor 
                de la clave "taskPriority" */
                taskPriority.textContent = cursor.value.taskPriority
                /* creamos el fragmento donde meteremos cada elemento creado */
                fragment.appendChild(taskPriority)

                /* Creamos el primer Boton <button></button> */
                const taskUpdate = document.createElement('BUTTON')
                /* creamos el atributo "type" y dentro ponemos "update" para 
                que sepa que el boton es para actualizar */
                taskUpdate.dataset.type = 'update'
                /* creamos el atributo "key" que en html es "data-key" el cual
                es para enviar al boton del formulario para saber que elemento
                estamos actualizando */
                taskUpdate.dataset.key = cursor.key
                /* insertamos en la etiqueta el texto "Update" para que tenga 
                un texto dentro el boton para saber para que es */
                taskUpdate.textContent = 'Update'
                /* lo guardamos en el fragmento */
                fragment.appendChild(taskUpdate)

                /* Creamos un sengundo boton */
                const taskDelete = document.createElement('BUTTON')
                /* agregamos el nombre "Delete" entre l etiqueta button para 
                que aparezca el nombre del boton y su funcion */
                taskDelete.textContent = 'Delete'
                /* creamos el atributo "type" y dentro ponemos "delete" para 
                que sepa que el boton es para borrar */
                taskDelete.dataset.type = 'delete'
                /* creamos el atributo "key" que en html es "data-key" el cual
                es para enviar al boton del formulario para saber que elemento
                estamos borrando */
                taskDelete.dataset.key = cursor.key
                /* los guardamos en el fragmento */
                fragment.appendChild(taskDelete)

                console.log(cursor.value); // imprime los registros que encuentra

                /* funcion "continue()" para que siga leyendo miestras aun haya
                registros en la tabla , esto es igual que un bucle que recorre
                todos los registros */
                cursor.continue()
            }
            /* cuando no exista el cursor, es porque ya termino de leer los 
            datos */
            else {
                /* le diemos que elimine lo que hay en "tasks" para cuando agreguemos otro registro en la pagina, y muestre los 
                registros, no vuelva a mostrar duplicado los registros */
                tasks.textContent = ''

                /* agregamos el fragmento con los datos al elemento con el
                id "tasks" para que se muestren en la pagina web */
                tasks.appendChild(fragment)
                console.log('No more data');
            }
        }

    }

    /* ponemos en escucha al formulario "form" para saber cuando se ha enviado */
    form.addEventListener('submit', (e) => {
        e.preventDefault() // evitamos que recarge la pagina por default

        /* objeto que vamos a añadir a la BD */
        const data = {
            /* "e.target.task" hace referencia a la etiqueta "input" que tiene 
            como atributo "name" y le asginamos dentro como "task" y con ".value" 
            recogemos lo que este escrito en "input" */
            taskTitle: e.target.task.value,

            /* en este hacemos referencia a la etiqueta "select" con el atributo
            "name" que tiene dentro escrito "priority", obteniendo el "value" o 
            valor de esta de la opcion seleccionado en el "select" */
            taskPriority: e.target.priority.value
        }
        console.log(data);

        /* Validamos si esta el atributo "data-action" como "add" o "update" */
        if (e.target.button.dataset.action == 'add') {
            addData(data) // añade datos
        } else if (e.target.button.dataset.action == 'update') {
            updateData(data) // obtiene el registro de la clave escrita
        }

        /* para vaciar el formulario */
        form.reset()
    })

    /* para que escuche ek click */
    tasks.addEventListener('click', (e) => {

        /* Para asegurarnos que hayamos hecho click en el boton "update" , tambien si es el "delete" */
        if (e.target.dataset.type == 'update') {
            getData(e.target.dataset.key) // obtenemos el registro de la key escrita
        } else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key) // borramos el registro de la key escrita
        }
    })

}







