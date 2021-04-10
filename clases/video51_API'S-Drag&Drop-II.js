/* Uso o aplicaciones de la API Drag y Drop
Arrastrar y mover un elemento a una zona especifica de la pagina con estas API'S
*/

const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

/* usamos el evento "dragstart" para activar cuando empecemos a arrastrar un elemento */
pendingTasks.addEventListener('dragstart', (e) => { /* Se dispara al comenzar a arrastrar */
    /* 
    objeto que solo se usa en el navegador "Firefox" 
        dataTransfer
            setData: Establece la informacion que queremos compartir
            getData: Establece la informacion que queremos obtener
    */
    /* Indicamos que a ".dataTransfer" queremos compartir texto plano y le
    indicamos que vamos a enviar el dato del ".id" */
    /* "text/plain" Este es el valor predeterminado para los datos de solo
     texto, osea que son textos directos que no llevan ni diseño ni estan
     dentro de etiquetas html. */
    e.dataTransfer.setData('text/plain', e.target.id)

    /* imprimimos el id del elemento que estamos arrastrando, indicando
    que lo que vamos a imprimir es de tipo "text" dentro del metodo ".getData()" */
    console.log(e.dataTransfer.getData('text'));
})

/* este evento lo utilizaremos para hacer un efecto visual para saber que elemento 
estamos arrastrando, cambiando el color al momento de arrastrar un elementos */
pendingTasks.addEventListener('drag', (e) => { /* drag -> Se dispara mientras arrastramos */
    /* "active" es el nombre que le pusimos a un selector ya creado dentro del 
    archivo css, entonces indicamos que agrege este selector al class, esto lo hace
    por medio del ".classList.add()" y el "e.target" ayuda a que agregue el 
    selector "active" en el elemento que arrastremos dentro de lo que es el 
    "pendindTasks" que es el id de un elemento padre html */
    e.target.classList.add('active')
})

/* este evento "dragend" lo utilizamos para que al momento de soltar el elemento
que arrastremos, borre la clase del selector de css que agregamos en el evento anterior */
pendingTasks.addEventListener('dragend', (e) => { /* Se dispara cuando soltamos el objeto */
    /* a través de ".classList" indicamos que en el atributo "class" del elemento
    que estemos arrastrando dentro del elemento padre "pendingRasks", esto lo detecta a 
    través del "e.target" que hace que obtengamos la etiqueta del elemento que estemos 
    arrastrando y es donde vamos a eliminar una clase llamada "active" que viene de 
    un selector del archivo css que nosostros creamos, esta eliminacion la realiza 
    con ".remove()" */
    e.target.classList.remove('active')
})

/* En este evento "dragover" lo ponemos porque sin el no funciona el poder mover
un elemento a una zona indicada */
finishedTasks.addEventListener('dragover', (e) => { /* Se dispara cuando el objeto se mueve sobre la zona de destino */
    e.preventDefault() /* pausar su comportamiento que evita que no se accione el evento "drop" */
})

/* usamos este evento "drop" para que haga el efecto final de insertar elemento en
en la nueva zona especificada */
finishedTasks.addEventListener('drop', (e) => { /* Se dispara cuando soltamos el objeto en la zona de destino */
    e.preventDefault() /* se utiliza para detener una acción por omisión */

    /* guardamos el elemento que vamos a mover, poniendo "e.dataTransfer.getData('text')"
    el cual sirve para obtener elnombre del id del elemento que estemos arrastrando */
    const element = document.getElementById(e.dataTransfer.getData('text'))
    
    element.classList.remove('active')

    /* indicamos primero con "pendingTasks.removeChild(element)" que elimine
    el elemento "element" html que se esta arrastrando, esto devolvera toda la
    etiqueta con sus atributas que tenia del que borramos, entonces es cuando
    agregamos esa etiqueta dentro del elemento "finishedTasks" a través del metodo
    ".appendChild()" */
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})
