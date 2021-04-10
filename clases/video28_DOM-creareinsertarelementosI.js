/* USO DE DOM PARA INSERTAR Y CREAR ELEMENTOS 
EL CUAL PUEDE SER OCUPADO PARA LLENAR ETIQUETAS "select" Y SEA ESCALABLE
*/

/* 
Crear un elemento: document.createElement(element);
Escribir texto en un elemento : element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = codigo HTML

Añadir un elemento al DOM: parent.appentChild(element)

Fragmentos de codigo: document.createDocumentFragment();
*/

const days = ['Seleccione una Opcion', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',
    'Sabado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

/* CREACION DE UN ELEMENTO (ETIQUETA) HTML */
const itemList = document.createElement('LI');
/* GUARDANDO DENTRO DEL ELEMENTOS (ETIQUETA) HTML UN TEXTO (INFORMACION) */
// itemList.textContent = 'Lunes';

/* Una forma sencilla de agregar el texto que esta dentro un elemento 
(etiqueta) HTML creado desde js en el documento html */
// document.write(itemList.textContent);

/* Sirver para AGREGAR EL ELEMENTO (ETIQUETA) creada en js, en el body del
documento HTML  */
// document.body.appendChild(itemList);

/* AGREGANDO EL ELEMENTO (ETIQUETA) "itemList" HTML CREADO EN JAVASCRIPT, DENTRO 
DEL ELEMENTO (ETIQUETA) HTML CON EL ID LLAMADO "daysList" */
// daysList.appendChild(itemList);

/* AGREGANDO UNA NUEVA ETIQUETA HTML DENTRO DE UNA ETIQUETA HTML DONDE TIENE 
UN ID "title" Y A LA VEZ PUDIENDO REEMPLAZAR EL TEXTO QUE TENGA POR OTRO */
title.innerHTML = 'DOM - <span>Crear e Insertar Elementos I</span>';

/* Una forma no correcta pero usada de AGREGAR varios elementos (etiquetas) nuevas html dentro de un DOM o documento html desde js, porque en este caso va 
reescribiendo varias veces el DOM y eso genera una sobreecarga en la pagina web */
/* for(const day of days){
    daysList.innerHTML += `<li>${day}</li>`;
} */


/* AGREGANDO CON CODIGO LIMPIO ARTICULOS "<li>" EN LA ETIQUETA "<ul>" */
/* CREACION DE UN OBJETO TIPO FRAGMENTO DE DOCUMENTO VACIO, EL CUAL QUEDA LISTO
PARA QUE SE PUEDA INSERTARSELES NODOS (ELEMENTOS O ETIQUETAS) HTML, QUE NO FORMARAN PARTE DEL DOM (HTML) ORIGINAL, ESTO FUNCIONA PARA QUE AGREGEMOS ELEMENTOS (NODOS O ETIQUETAS) HTML EN EL FRAGMENTO Y LUEGO AGREGARLO AL ARBOL DEL DOM ORIGINAL, PARA NO GENERAR CONFLICTOS COMO SOBREECARGAS EN LA PAGINA WEB. */
const fragment = document.createDocumentFragment();
/* UNA VEZ CREADO EL DOCUMENTO DE FRAGMENTO, EN CASO DE METER MUCHOS ELEMENTOS (NODOS O ETIQUETAS) HTML, SE DEBERA CREAR UN CICLO FOR PARA IR AGREGANDOLOS AL DOCUMENTO DE FRAGMENTO */
for (const day of days) {
    /* CREACION DE UN ELEMENTO (ETIQUETA) HTML */
    const itemList1 = document.createElement('LI');
    /* GUARDANDO DENTRO DEL ELEMENTOS (ETIQUETA) HTML UN TEXTO (INFORMACION) */
    itemList1.textContent = day;

    /* agregando los elementos que estan dentro del documento de fragmento a la etiqueta nueva creada */
    fragment.appendChild(itemList1);
}

/* y por ultimo agregando todas estas etiquetas (elementos o nodos) a la
etiqueta indicada con el id "daylist" */
daysList.appendChild(fragment);


/* AGREGANDO CON CODIGO LIMPIO OPCIONES "<option>" EN LA ETIQUETA "<select>" */
const fragment1 = document.createDocumentFragment();

for (const day1 of days) {
    const selectItem = document.createElement('OPTION');

    /* Creamos el atributo "value" dentro de la etiqueta "option" y le agregamos
    cada elemento del arreglo "days" convirtiendo antes cada elemento aminusculas
    ya que "value" no acepta letras mayusculas */
    selectItem.setAttribute('value', day1.toLowerCase());
    selectItem.textContent = day1;
    fragment1.appendChild(selectItem);
}

selectDays.appendChild(fragment1);


console.log(fragment);
console.log(itemList);
