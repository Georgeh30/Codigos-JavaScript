/* USO DE FETCH CON EL METODO POST PARA EL ENVIO DE INFORMACION A LA PAGINA DE LA API jsonplaceholder
QUE SIRVE PARA HACER PRUEBAS DE ENVIO AUN QUE NO LAS INSERTA, PORQUE SOLO ES PARA PRUEBAS */

/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
   
     console.log(newPost)
     console.log(JSON.stringify(newPost))
*/


const button = document.getElementById('button')

/* Evento de escucha "click para cuando hacemos click en el boton realiza las siguientes acciones" */
button.addEventListener('click', () => {
    /* Creamos un Objeto con los campos que vamos a enviar */
    const newPost = {
        title: 'A new post',
        body: 'Esta es la frase que le vamos a enviar a través de fetch por el metodo POST',
        userId: 1
    }
    
    /* USO DE FETCH PARA ENVIO DE DATOS CON EL METODO POST */
    /* URL donde vamos a enviar los datos */
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', /* indicamos que es a través del metodo POST */
        body: JSON.stringify(newPost), /* los datos que queremos enviar parseados a JSON */
        headers: {
            'Content-type': 'application/json' /* aqui le indicamos que estamos enviando datos en formato tipo JSON */
        }
    }).then(res => res.json()) /* obtenemos la respuesta en la variable temporal res y la convertimos a tipo JSON para poder interpretar la respuesta que nos llegue */
    /* y esa respuesta convertida a json la obtenemos en esta nueva variable temporal y la imprimimos a consola, que la info que enviamos a la otra pagina
    pero con un campo nuevo "id: 101" que es la respuesta del envio que hicimos */
    .then(data => console.log(data)) 

})





