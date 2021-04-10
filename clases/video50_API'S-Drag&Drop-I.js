/* Uso de la API Drag & Drop para arrastrar y soltar un elemente de un lugar a otro */

/*
    API drag & drop:
    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo
    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar y sus 3 eventos que son para el objeto que arrastremos:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto
        Zona de destino y sus 4 eventos que son para el objeto quien reciba el otro objeto arrastrado:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino, para usar 
                  este, debemos usar antes el "dragover" y pausar su comportamiento que evita 
                  que no accione el "drop" con el metodo ".preventDefault()" y tambien en el
                  evento "drop" pausar su comportamiento.
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/


const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

/* Uso de los eventos para arrastrar para el elemento "smile" */
smile.addEventListener('dragend', () => {
    console.log('Drag Start');
})

/* Uso de los eventos para zona de destino para el elemento "dropZone" */
dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    console.log('Drag Enter');
})










