/* Uso del DOM - Insertar, Clonar y Borrar Elementos (Nodos o Etiquetas) HTML */

/*
Insertar y eliminar elementos II
    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes
    del elemento de referencia
    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)
    positions:
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)
    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = "I'm a new element";

/* INSERTAR DE LA FORMA BASICA */
/* Anteriormente se usó de esta forma para agregar un nuevo elemento, PERO lo
agrega al final, y a veces se requiere que este agregado en una ubicacion distinta */
list.appendChild(newElement);
/* FIN INSERTAR DE LA FORMA BASICA */

/* INSERTAR POR POSICION */
/* Ahora con esta propiedad ".insertBefore()" indicamos que coloque "newElement",
antes de la posicion de nodo o elemento 0 ".children[0]" de los elementos que
tiene dentro el elemento (nodo o etiqueta) con el atributo "id" llamado "list" */
list.insertBefore(newElement, list.children[0]);

/* Se dice que inserte ".insertAdjacentElement" el elemento (etiqueta o nodo)
"newElement" en la posicion 0 ".children[0]", antes de que empiece "beforebegin" a
insertarce los elementos que existan dentro del elemento "list" */
list.children[0].insertAdjacentElement('beforebegin', newElement);

/* En este caso se dice que inserte ".insertAdjacentElement" el elemento
"newElement", despues de comenzar "afterbegin" a insertarce los elementos que ya
existan dentro del elemento "list", ya no es necesario indicarle la posicion
"children[posicion]" porque el "afterbegin" considera que sera el "newElement" el
primer hijo del padre "list" y lo pondra por default al principio */
list.insertAdjacentElement('afterbegin', newElement);

/* Se le indica que inserte ".insertAdjacentElement" el elemento "newElement",
antes del final "beforeend" de insertar los elementos que ya existan dentro del
elemento "list", y por default considera que el "newElement" sera el ultimo. */
list.insertAdjacentElement('beforeend', newElement);

/* indicamos que inserte ".insertAdjacentElement" el elemento "newElement",
después de que acabe "afterend" en la posicion 0 ".children[0]" de los elementos
que existan dentro del elemento "list". Indicamos posicion ".children[0]",
porque con "afterend" se sale del elemento "list" el "newElement" que inserte. */
list.children[0].insertAdjacentElement('afterend', newElement);

/* Este es un ejemplo de como insertar nuevas etiquetas con texto ya incluido dentro,
de la misma forma de las anteriores lineas de codigo ejemplificadas pero cambiando
de la propiedad "insertAdjacentElement()" a la propiedad ".insertAdjacentHTML()" */
list.children[0].insertAdjacentHTML('afterend', '<li>Nueva etiqueta con texto dentro</li>');

/* Y en este es un ejemplo de como insertar solo texto en alguna posicion de un
grupo de elementos, siguiendo las mismas reglas que en cada uno de los ejemplos
de arriba. */
list.children[1].insertAdjacentHTML('afterend', 'Nueva etiqueta con texto dentro')
/* FIN INSERTAR POR POSICION */

/* REEMPLAZAR */
/* Partiendo de igual forma del padre "list", indicamos que reemplace ".replaceChild()"
el elemento de la posicion "list.children[0]", con el "newElement" */
list.replaceChild(newElement, list.children[0]);
/* FIN REEMPLAZAR */


/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like
    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente)
        child.replaceWith(newChild)
*/

/* INSERTAR POR POSICION CON JQUERY */
/* Inserta el elemento "newElement" en la posicion 0 ".children[0]", antes de que
empiece ".before()" a insertarce el elemento que exista en la posicion 0, si
quitamos ".children[0]", al igual que si lo quitamos en todos los ejemplos
anteriores que lo tengan, entonces estaria siendo hermano del elemento padre "list"
y entonces se insertaria antes que el y no en sus elementos que estan dentro de él */
list.children[0].before(newElement);

/* Inserta el "newElement" despues de que empiece ".prepend()" a crearse los
elementos que existen dentro del elemento padre "list", que por default lo pondra
como el primer hijo, osea en primer lugar */
list.prepend(newElement);

/* Inserta el elemento "newElement" antes de que acabe ".append()" de insertarse
los elementos que existan dentro del padre "list" que por default lo inserta en
la ultima posicion */
list.append(newElement);

/* inserta antes del elemento con la posicion 0 ".children[0]" el elemento
"newElement", dentro del padre "list" */
list.children[0].after(newElement);

/* FIN INSERTAR POR POSICION CON JQUERY */

/* REEMPLAZAR CON JQUERY */
/* Reemplaza ".replaceWith()" el elemento con la posicion 0 ".children[0]" por el
elemento "newElement" */
list.children[0].replaceWith(newElement);
/* otra forma de hacer el reemplazo que solo es seleccionar el elemento que 
queremos reemplazar sin tener que seleccionar el padre "list". */
document.getElementById('child-2').replaceWith(newElement);
/* FIN REEMPLAZAR CON JQUERY */


/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona
        todo el elemento con los hijos, si le pasamos false clona solo el elemento
        sin hijos
        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

/* CLONAR */
/* Clona el elemento padre "list" con todos sus elementos dentro de el hijo cuando
ponemos ".cloneNode(true)" ó clona solo el elemento padre "list" sí le ponemos
".cloneNode(flase)", en este ejemplo vemos como puede servir para clonarlo y poner
en otra parte del codigo el clon y es de forma ESCALABLE porque modificamos el 
elemento que clonó y a su vez el clon se modifica tambien*/
list.after(list.cloneNode(true));
list.after(list.cloneNode(false));

/* Elimina completamente el elemento "list" con todo y sus hijos */
list.remove();

/* Elimina solo el elemento de la posicion 0 ".children[0]" hijo, dentro del 
elemento padre "list" */
list.removeChild(list.children[0]);
/* FIN DE CLONAR */
