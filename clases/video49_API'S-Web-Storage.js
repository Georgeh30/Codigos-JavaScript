/* Uso de la API Web Storage (Almacenamiento Web)
Permite guardar informacion en el dispositvo con el conjunto de {clave: valor} */

/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:
            1- "sessionStorage" -> mantiene un área de almacenamiento separada para cada 
                origen que está disponible mientras dure la sesión de la página 
                (mientras el navegador esté abierto, incluyendo recargas de página y 
                restablecimientos). 
            2- "localStorage" -> hace lo mismo, pero persiste incluso 
                cuando el navegador se cierre y se reabra.
        Ambos funcionan con "clave:valor" y tienen dos métodos fundamentales 
        "setItem()" para asignar una "clave:valor" y "getItem()" que recibe como 
        parámetro la clave de la que quieremos obtener el valor

JSON.stringify(objeto) -> convierte un "objeto" o valor de JavaScript en una cadena 
                          de texto JSON.
JSON.parse(datos_JSON)-> Este comando deserializa los datos JSON, realiza la 
                         acción inversa del comando JSON Stringify.                           
    

"sessionStorage.clear()" -> borra directamente la informacion almacenada
"localStorage.clear()" -> borra directamente la informacion almacenada

*/

/* NOTA: todo codigo en los ejemplos de abajo que contenga "sessionStorage", pueden ser cambiados
por "localStorage" y la unica diferencia seria en cuanto tiempo dura guardado los datos en el 
almacenamiento web */

const form = document.getElementById('form')
const keys = document.getElementById('keys')

/* creamos el evento entregar "submit" para guardar informacion o  la sesion en el 
storage web */
form.addEventListener('submit', (e) => {
    e.preventDefault() // no recarque la pagina

    /* EJEMPLO NORMAL */
    /* Creamos un objeto "person" */
    /* const person = {
        name: 'Jorge',
        email: 'johncrotf2@gmial.com'
    } */

    /* Guardamos el "objeto JS" dentro de "sessionStorage", a traves del metodo
    ".setItem(clave, valor)", indicando la clava como "person" y el valor como
    "person", pero conviertendolo en "objeto JSON" con el metodo "JSON.stringify()" */
    // sessionStorage.setItem('person', JSON.stringify(person))
    /* FIN DEL EJEMPLO NORMAL */

    /* 
    form.key.value -> le pedimos que obtenga el valor ".value" que contenga la 
                      etiqueta html, que tiene asignado en el atributo "id" el nombre de "key", el 
                      cual está etiqueta se debe de encontrar dentro de otra etiqueta que tiene 
                      asignado en el atributo "id" el nombre de "form" 
    
    form.value.value -> igualmente pedimos el valor ".value" que contenga la 
                        etiqueta html, que tiene asginado dentro del atributo "id"
                        el nombre de "value", el cual debe estar dentro de otra
                        etiqueta que contenga en el atributo "id" el nombre de "form"

    */
    sessionStorage.setItem(form.key.value, form.value.value)

    /* Creamos una etiqueta y dentro de ella metemos informacion, en este caso
    el valor de la etiquerta que tiene el id "key", que debe estar detro de la
    etiqueta con el id "form", despues guardamos esta nueva etiqueta, dentro de
    la etiqueta que tiene como id "keys" */
    keys.innerHTML += `<option>${form.key.value}</option>`

    /* Borrar valores escrito dentro de cada recuadro del formulario */
    form.reset()
})

keys.addEventListener('change', () => {
    /* 
    document.getElementById('infoValue').textContent -> guardamos dentro de la 
                                                           etiqueta html que tiene 
                                                           como id "infoValue", solo 
                                                           el texto  
    sessionStorage.getItem(keys[keys.selectedIndex].textContent) -> obtengamos solo el texto
                                                                    de la opcion que seleccionemos
                                                                    de la etiqueta que tiene como
                                                                    id "keys", obteniendo el indice de
                                                                    la opcion seleccionada para poder
                                                                    indicarle que opcion es donde se va
                                                                    a obtener solo el contenido del texto
    */
    document.getElementById('infoValue').textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

/* borra la info guardada en el almacenamiento web */
sessionStorage.clear()

/* borra la informacion guardada en el alamacenamiento web pero de un solo registro
indicando su clave o key, que en este caso tenemos una guardada con clave "name" */
sessionStorage.removeItem('name')
