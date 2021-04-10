/* Uso de DOM Traversing 
atravesar el DOM: es el acto de seleccionar un elemento de otro elemento.
Sepuede usar este para ingresar a un nodo o elemento que esta dentro de otro:
document.getElementById('title').querySelector('span');
PERO! es mas recomendable "DOM Traversing".
*/

/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.
Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene
Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano
Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/


const parent = document.getElementById('parent');

/* PADRE */
/* Vemos como es que el PADRE es la etiqueta "nav" e imprime todo lo
que tiene dentro, aunque estemos llamando a la etiqueta que esta dentro de el, 
igualmente si no estuviera dentro de "nav", siempre debe haber un padre y 
entonces seria directamente "body" */
// console.log(parent.parentNode); // Devuelven lo mismo
// console.log(parent.parentElement); // Devuelven lo mismo

// da null porque el documento html y el no tiene padre
// console.log(document.parentElement);

// podemos ir subiendo de padre
// console.log(parent.parentElement.parentElement); // imprime desde el contenedor "body"
// console.log(parent.parentElement.parentElement.parentElement); // imprime desde el contenedor "html"
/* FIN PADRE */


/* HIJOS */
/* Devuelve todos los nodos (etiquetas o elementos) html HIJOS, incluyendo los 
saltos de linea y otros que hace automaticamente el html, que se encuentren 
dentro del nodo padre "nav" */
console.log(parent.childNodes);

/* Devuelve todos los nodos (etiquetas o elementos) html HIJOS que hemos 
puesto dentro del nodo padre "nav" */
console.log(parent.children);
/* Y para acceder a uno solamente es: */
console.log(parent.children[0]);

/* Aqui mostrara el primer hijo "salto de linea" que viene por default entre la 
etiqueta "nav" y la primera etiqueta que esta dentro que es: "li" */
console.log(parent.firstChild);
/* Pero existe otro metodo que ayuda a seleccionar el primer hijo sin contar 
los saltos de linea */
console.log(parent.firstElementChild);

/* Aqui mostrara el ultimo hijo "salto de linea" que viene por default entre la 
etiqueta cierre "/ul" y el cierre de la etiqueta "/nav" */
console.log(parent.lastChild);
/* Pero existe otro metodo que ayuda a seleccionar el ultimo hijo sin contar 
los saltos de linea */
console.log(parent.lastElementChild);

/* Devueleve true si el nodo dentro del padre tiene hijos y false si no tiene */
console.log(parent.hasChildNodes());

/* FIN HIJOS */


/* HERMANOS */
/* Devuelve el siguiente nodo hermano, contando los saltos de lineas y otras 
cosas que vienen por default */
console.log(parent.nextSibling);
/* Este devolvera el nodo sin contar los saltos de lineas, pero en este caso 
devolvera null porque "ul" no tiene un hermano despues de el que este dentro del
padre "nav" */
console.log(parent.nextElementSibling); // null
/* En cambio este subimos un nivel para encontrarnos que sea hijo el "nav" y 
entonces su hermano siguiente es "script" */
console.log(parent.parentElement.nextElementSibling); 

/* Devuelve el nodo contanto el salto de linea anterior */
console.log(parent.previousSibling); // devuelve el salto de linea anterior

/* Devuelve el nodo anterior sin contar el salto de linea, PERO dara null porque
no tiene un hermano anterior */
console.log(parent.previousElementSibling); // devuelve el nodo anterior sin contar el salto de linea
/* subimos un nodo para llegar al "nav" y devuelve el nodo hermano anterior que 
en ese caso es "h1" */
console.log(parent.parentElement.previousElementSibling);
/* FIN HERMANOS */






