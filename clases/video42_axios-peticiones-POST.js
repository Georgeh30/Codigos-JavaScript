/* Uso de la libreria "Axios" para el metodo "POST", con el cual se realiza el
envio de datos, los cuales no se necesita convertilos a JSON en ningun momento
porque por "default" ya lo hace "Axios" */

const button = document.getElementById('button')

/* PARTE DEL CODIGO DEL EJEMPLO DEL ARCHIVO "video38_AJAX-V-Fetch-POST.js" */
//res = response = respuesta
/* button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}) */
/* FIN DEL CODIGO DEL EJEMPLO DEL ARCHIVO "video38_AJAX-V-Fetch-POST.js" */


/* EJEMPLO CON LA LIBRERIA "Axios" */
/* metodo ".addEventListener()" para el boton "button", en el cual se usa el 
evento "click" para cuando el usuario de click al boton, inserte ciertos datos
en la url indicada.
Estructura ".addEventListener('evento', funcion)" */
button.addEventListener('click', () => {
    /* Metodo Axios axios({}) */
    axios({
        method: 'POST', // metodo de envio de info "POST"
        url: 'https://jsonplaceholder.typicode.com/post', // URL donde se enviara la info
        
        /* Datos que se enviaran tipo clave:valor siempre */
        data: {
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    })
    /* damos una promesa ".then()" para obtener la respuesta del envio e imprimirlo */
    .then((res) => console.log(res.data))
    /* damos otra promesa para los errores ".catch()" para capturar el error e imprimirlo */
    .catch((err) => console.log(err))
})

















