/* Uso de Fetch en AJAX para mostrar imagen y abrir pdf  */

/*
    Obtener API
        blob (): objeto largo binario
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla
        URL: Con el objeto URL usando el método createObjectURL (archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/


const buttonImg = document.getElementById('button-img')
const buttonPDF = document.getElementById('button-pdf')

/* Boton para insertar la ruta del archivo pdf y abrirla */
buttonImg.addEventListener('click', () => {
    /* Peticion a un recurso (img) local */
    fetch('../img/dog.jpg')
        /* creamos la variable temporal "res" en la cual en ese momento de 
        crearla, guarda el archivo y lo convertimos a binario con ".blob()" para 
        que se pueda usar en distintos lugares y no solo en el area local */
        .then(res => res.blob())
        /* Y en este caso el archivo imagen ya pasada a binario con ".blob()", 
        insertamos la ruta de la img binaria dentro del atributo "src" de la 
        etiqueta <img></img> que tiene como id "img" */
        .then(img => {
            document.getElementById('img').src = URL.createObjectURL(img)
        })
})

/* Boton para insertar la ruta del archivo pdf y despues en la etiqueta <a></a> ir 
a la ruta y nos muestre el pdf */
buttonPDF.addEventListener('click', () => {
    /* Peticion a un recurso (pdf) local */
    fetch('../document/demo.pdf')
        /* creamos la variable temporal "res" en la cual en ese momento de 
        crearla, guarda el archivo y lo convertimos a binario con ".blob()" para 
        que se pueda usar en distintos lugares y no solo en el area local */
        .then(res => res.blob())
        /* Y en este caso el archivo pdf ya pasada a binario con ".blob()", 
        insertamos la ruta del pdf binaria dentro del atributo "href" de la 
        etiqueta <a></a> que tiene como id "pdf" y damos click en el enlace
        para que nos pueda abrir otra pestaña en el navegador con la ruta
        del archivo pdf insertado en ese atributo "href" */
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})





