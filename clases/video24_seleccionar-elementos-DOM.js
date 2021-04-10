/* DOM (DOCUMENT OBJECT MODEL)
DOM es toda la estructura html del documento */

/* DOM no es parte de javascript, es una API usada en javascript */

/* 
Cada parte del arbol del documento es un NODO.

Hay varios tipos de nodos, los más utilizados son:
    * Element node - devuelve 1 (Cualquier etiqueta HTML).
    * Text node - devuelve 3 (El contenido de la etiqueta).
    * Comment node - devuelve 8 (Cualquier comentario en HTML).
*/

/* Para acceder a un elemento (etiqueta) a través de su id */
// document.getElementById('');


/* Para acceder al primer elemento (etiqueta) que coincida con el selector CSS */
// document.querySelector('');


/* Para acceder a todos los elementos que coincidan con el selector CSS, 
devuelve un nodeList */
// document.querySelectorAll('');

/* Para acceder a un elemento (etiqueta) a través de su id, aqui se escribe el
nombre puesto en el atributo id dentro de la etiqueta HTML */
const title = document.getElementById('title');

console.log(title.textContent); // Obtenemos el texto dentro de la etiqueta
console.log(title); // Obtenemos el la etiqueta y sus propiedades

/* De esta forma MODIFICAMOS EL TEXTO dentro de la etiqueta HTML */
// title.textContent = 'DOM - Accediendo a Nodos'

/* Para acceder al primer elemento (etiqueta) que coincida con el selector CSS,
ya que generalmente se usa el atributo class para CSS. Para seleccionar otro
elemento (etiqueta) que no sea el primero que encuentre, ya que puede haber mas 
que tengan asignado el mismo selector, entonces se ingresará, en el caso de abajo
asi: ('.paragraph:nth-child(3)') que su estructura es: 
('.nombredelselector:nth-child(posiciondelelemento)') */

/* En resumen... dentro de los parentesis debemos escribir el nombre del selector
que ponemos en css, ya sea que es para una clase que lleva (.nombreselector),
ya sea para una etiqueta directamente, el cual no lleva punto al principio. */
const paragraph = document.querySelector('.paragraph:nth-child(1)');
console.log(paragraph);

/* Tambien se usa para ingresar dentro de una etiqueta que esta dentro de otra,
en este caso usamos el metodo "querySelector()" sacando de la variable anterior
"paragraph" el selector css "span", porque asi es como la escribimos en CSS, 
aunque no se alla creado el archivo CSS aun. */
const span = paragraph.querySelector('span');
/* Obtenemos el texto dentro */
console.log(span.textContent);

/* Otra manera de ingresar y obtener el elemento de una etiqueta dentro de otra, 
asi mismo es ir poniendo .querySelector() si existe otro dentro del anterior y 
asi sucesivamente hasta llegar con el que deseamos */
const span1 = document.getElementById('title').querySelector('span');
console.log(span1.textContent);

/* Para acceder a todos los elementos que coincidan con el selector CSS, 
devuelve un nodeList con todos las etiquetas o los textos que tengan asignado el 
atributo clase con el nombre "paragraph" */
const paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs);

/* Esta linea de codigo ayuda a dar estilo PERO! NO SE DEBE USAR solo en caso
especiales */
paragraphs[0].style.color = 'red';

/* Primera forma de convertir en arreglo las etiquetas obtenidas, pero que no
es muy recomendable usar esta forma */
const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
paragraphsSpread.map(p=>p.style.color = 'green');

/* Segunda forma de convertir en arreglo las etiquetas obtenidas */
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));
paragraphsArray.map(p=>p.style.color = 'green');
