/* Uso de dos API'S
Para hacer el efecto de Agregar o soltar para agregar un archivo desde una carpeta local */

const fileInput = document.getElementById('file')
const dropZone = document.getElementById('drop-zone')

/* le asignamos el evento "click" al elemento con el id "dropZone" y como funcion
callback, agregamos dentro de ella "fileInput.click()" para que al momento de
que se de click dentro de "dropZone" se accione el evento "click" y se ejecute
este "fileInput.click()" para que se abra la carpeta de archivos locales para
agregar un archivo local y en el html ponemos una clase "hiden" que creamos 
dentro del css como un selector llamado de esa forma y el cual oculta esta 
etiqueta "fileInput" */
dropZone.addEventListener('click', () => fileInput.click())

/* este evento "dragover" lo usamos para que al momento de pasar por la 
zona de destino, se accione el efecto de volverse oscuro la zona destino */
dropZone.addEventListener('dragover', (e) => { // Se dispara cuando el objeto se mueve sobre la zona de destino
    e.preventDefault() // para evitar su efecto por defecto

    /* En el elemento o etiqueta html con id "dropZone", agregamos en el atributo 
    class, el selector creado por nosotros en el css que le llamamos "drop-zone--active" */
    dropZone.classList.add('drop-zone--active') 
})

/* evento "dragleave" usado para que haga el efecto de des-sombrearse cuando sale de la
zona destino el archivo que estemos arrastrando */
dropZone.addEventListener('dragleave', (e) => { // Se dispara cuando el objeto sale de la zona de destino
    e.preventDefault() // para evitar su efecto por defecto

    /* ahora en vez de agregar una clase, lo que hace es eliminar la clase del 
    selector de css llamado "drop-zone--active" */
    dropZone.classList.remove('drop-zone--active')
})

/*   */
dropZone.addEventListener('drop', (e) => { // Se dispara cuando soltamos el objeto en la zona de destino
    e.preventDefault() // para evitar su efecto por defecto

    /* para obtener el archivo o los archivos de la propiedad del evento accionado
    con los datos obtenidos del "dropZone", desde la propiedad "e.dataTransfer.files" */
    fileInput.file = e.dataTransfer.files
    console.log(fileInput.files);
})
