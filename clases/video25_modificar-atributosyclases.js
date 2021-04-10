/* Formas de modificar atributos y clases de html en javascript */

/* 
Atributos
    element.getAttrubute('attrubute')
    element.getAttrubute('attribute', value)

Clases
    element.classList.add('class', 'class', ...)
    element.classList.remove('class', 'class', ...)
    element.classList.toggle('class'[, force])
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)

atributos directos
    id
    value
*/


/* METODOS USADOS PARA ATRIBUTOS */

const title = document.getElementById('title');
const name = document.getElementById('name');

/* Obtenemos el nombre que tiene dentro del atributo id */
console.log(name.getAttribute('id'));

/* En el primer parametro indicamos que atributo de la etiqueta html con el id
del nombre "name" vamos a modificar o agregar y odificar en caso de que no este 
escrito el atributo y en el segundo parametro indicamos el nuevo valor del 
atributo */
name.setAttribute('type', 'number');


/* METODOS USADOS PARA CLASS */

/* Añadimos al atributo class donde tiene un id que llamamos "title", dos 
clases mas */
title.classList.add('main-title', 'other-title')

/* Eliminamos clases dentro del atributo class que tiene una clase 
que llamamos "title" */
title.classList.remove('main-title')

/* Comprobamos que exista cierta clase dentro del atributo class donde tiene 
como clase una que llamamos "title", si existe manda true o false si no existe */
if (title.classList.contains('title')) {
    console.log('Title tiene la clase title');
} else {
    console.log('Title no tiene la clase title');
}

/* Indicamos en el primer parametro el nombre de la clase que vamos a reemplazar,
y en el segundo parametro el nombre de la clase que queremos poner ahora */
title.classList.replace('title', 'main-title');

console.log(title);
console.log(name);


/*  */


/* ATRIBUTOS DIRECTOS */

/* Imprime nombre asignado dentro del atributo id */
console.log(title.id);

/* Imprime el texto y etiquetas dentro de la etiqueta con nombre de atributo id "title" */
console.log(title.innerHTML);

/* Imprime solo el texto son tomar en cuenta que tenga otra etiqueta dentro */
console.log(title.textContent);

/* Sirve para validar si hay algo escrito dentro de un cuadro de texto.
Imprime en este caso el valor puesto por default en el atributo value, en la
etiqueta input que tiene como atributo id el nombre "name" */
console.log(name.value);
