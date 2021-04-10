const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

input.addEventListener('keyup', (e) => {
    /* Imprime las teclas que vamos tecleando */
    console.log(input.value);

    /* Tambien se usa esto para saber que tecla pulsamos */
    console.log(e.key);

    /* Imprime la informacion del evento con una lista completa de todas
    sus propiedades, PERO NO funciona en todos los navegadores */
    console.log(event);

    /* Imprime de igual forma la informacion y una lista de sus propiedades
    del evento y si es compatible con todos los navegadores */
    console.log(e);

    /* Ejemplo de como acceder a la informacion de cada valor de las propiedades
    que despliega el evento */
    console.log(e.srcElement.attributes[1].baseURI);
});

/* Imprime la info y propiedades del evento para el objeto global de la pagina
web, que es "window" aun que se puede omitir poner eso antes del ".addEventListener()" */
/* window.addEventListener('click', (e) => {
    console.log(e);
}); */

/* Imprimimos las propiedades de la propiedad "target" que se encuentra dentro del
evento, el cual es uno de los MAS IMPORTANTES A USAR, para saber info sobre los
eventos, aunque en chrome no lo muestra, pero en mozilla SÍ!!!! */
button.addEventListener('click', (e) => {
    console.log(e.target);
});


/* Una buena forma de saber en cual hemos HECHO CLICK, cuando son muchas etiquetas
html, es asignandole el evento "click" al contendor donde se encuentran todas
estas etiquetas */
const gallery = document.getElementById('gallery')
/* Y una vez realizado esto, mandamos a impprimir al hacer click, esto sirve
para no poner el evento "click" a cada una de las etiquetas */
gallery.addEventListener('click', (e) => {
    /* Imprime el texto de la etiqueta en la que se hizo click */
    console.log(e.target.textContent);

    /* Cmabia de color la etiqueta o el objeto donde se hizo click */
    e.target.classList.add('red');
});


/* En el caso de envio de info por el boton "enviar", y queremos saber que info 
envio pero como actualiza la pagina no lo deja la info en consola, asi que en 
estos casos se usa el codigo:  */
form.addEventListener('submit', (e) => {
    /* Y este codigo hace que no hago lo que tenia como predeterminado hacer,
    en este caso, que NO recargar la pagina que tiene predeterminado dentro del
    atributo "type" con el valor "submit" que estan dentro de la etiqueta "input" */
    e.preventDefault();

    /* Y entonces podemos imprimir en este caso la info del evento "submit" */
    console.log(e);
});

/* Otra cosa que se puede hacer con los eventos, es forzarlos a que se inicien */
form.submit();
button.click()