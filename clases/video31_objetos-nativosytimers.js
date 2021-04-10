/* Uso de los objetos nativos y el timers */

const button = document.getElementById('button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert() - muestra una ventana de alerta
    prompt() - muestra una ventana para ingresar informacion por teclado
    confirm() - muestra una ventana con mensaje de confirmacion cpn boton aceptar y cancelar
*/

/* mensaje de alerta */
alert("mensaje de alerta 1")
/* tambien puede ir asi el mensaje de alerta, pero no es necesario */
window.alert("mensaje de alerta 2")

/* Ejemplo de como se asocia a "window" si no ponemos ninguna variable al 
princincipo en el cual se asocie .addEventListener() y al hacer click sobre 
cualquier parte de la pagina web, imprimira las propiedades del evento */
addEventListener('click', (e) => {
    console.log(e);
});
/* otro ejemplo cuando carga la pagina la carga de la pagina e imprime las 
propiedades del load accionado */
addEventListener('load', (e) => {
    console.log(e);
});
/* otro ejemplo para cuando se mueva el "scroll" que es cuando hay mucha info en 
la pagina web e imprime las propiedades del scroll accionado */
addEventListener('scroll', (e) => {
    console.log(e);
});

/* Para ingresar info a través del teclado */
prompt('Escriba su Nombre:')

/* Ventana con mensaje de confirmacion */
if (confirm('Acepta?')) {
    console.log('El usuario acepto');
} else {
    console.log('El usuario no acepto');
}


/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log() - imprime a consola
    console.dir() - ver todas las propiedades de un objeto por consola.
    console.error() - Muestra un mensaje de error en la Consola.
    console.table() - Muestra datos tabulares como una tabla en la Consola.
*/

/* Da info sobre la etiqueta button con el id button */
console.log(button);
/* Con ".dir()" SÍ nos permite desplegar la lista de propiedades del elemento */
console.dir(button);

/* Sirve para las depuraciones de codigo, imprime un mensaje en rojo */
console.error('error');

const person = {
    name: 'Doron',
    age: 30,
    email: 'doron@gmail.com'
};

const arreglo = [1, 2, 3, 213, 345, 76, 324, 'hola'];

/* Muestra en formato tabla dentro de la consola los datos de un arreglo o un 
objeto */
console.table(person); // devuelve tabla con columna index y columna value del objeto
console.table(arreglo); // devuelve tabla con columna index y columna value del arreglo


/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

/* Imprime la direccion url o ruta url */
console.log(location.href);
/* Se puede usar para redireccionar a otra pagina web */
location.href = 'https://www.google.com.mx';

/* Imprime el tipo de protocolo que es la pagina, http , https, ftp, etc... */
console.log(location.protocol);

/* Imprime el dominio principal o host donde se aloja nuestra pagina web */
console.log(location.host);

/* Imprime solo la ruta donde esta ubicado esta pagina o sus subdirectorios 
donde esta ubicado */
console.log(location.pathname);

/* Para pasar info desde la url entre paginas, una forma de usarlo, es para cambiar 
la info que va a cargar una misma pagina o html, pasando el valor con ".hash" */
console.log(location.hash);

/* Recarga la pagina */
location.reload();


/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back()
    forward()
    go(n|-n)
    length
*/

/* Escribimos los metodos de "history" en esta ocasion directamente en la consola 
del navegador */
console.log(history);

/* usamos directamente en la consola del navegador "history.back()" en un sitio
web donde ya hemos ingresado a sus subpaginas para ver como regresa a la anterior */
history.back();

/* con "history.forward()" va a la siguiente pagina segun el historial realizado 
dentro del sitio web */
history.forward();

/* para navegar entre el historial que hemos realizado entre las subpaginas de 
un sitio web, con ayuda de "history.go()" indicamos el numero de paginas en 
positivo para ir hacia adelenta y en negativo para ir hacia atras */
history.go(1);
history.go(-1);

/* Para saber cuantas paginas tenemos en el historial es: "history.length" */
history.length;


/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

/* En la url que esta en la parte de arriba podemos ver cada uno de los metodos
para obtner la fecha y la hora del metodo Date() */
const date = new Date()
console.log(date.getDate()); // devuelve el dia
console.log(date); // devuelve info completa de la fecha y hora


/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/* El metodo "setTimeOut()" existen dos ejemplos de como ponerlo, el primero es 
haciendo una funcion normal con la accion que deseamos que tarde un cierto tiempo 
en accionarse, y despues usar el "setTimeOut(funcion, tiempo_mmseg)" para que en 
el primer paramentro llamemos a la funcion y el segundo parametro indiquemos el 
tiempo en milisegundo que tardara en accionarse, en este caso lo usamos dentro 
del metodo para un boton */
button.addEventListener('click', () => {
    setTimeout(saludar, 4000)
})
/* FUNCION QUE QUEREMOS ACCIONAR DESPUES DE CIERTO TIEMPO */
const saludar = () => {
    console.log('HOLA MUNDO');
}
/* El segundo ejemplo, lo que cambia es solo que la funcion la ponemos 
directamente en el primer parametro del metodo ".setTimeout(funcion, mmseg)" y
el segundo parametro sigue siendo el mismo que seria el tiempo en milisegundos */
button.addEventListener('click', () => {
    setTimeout(() => {
        console.log('ADIOS Y HOLA!!!');
    }, 4000)
})
 
/* El metodo "clearTimeout()" el cual funciona para parar el "setTimeout()",
Ponemos el ejemplo de accionar el "setTimeout()" al momento de abrir la pagina
para que despues de ciertos segundo que se abra la pagina muestre el mensaje por
consola, guardandolo en una variable para que funcione el otro metodo que lo 
detendrá, ahora se agrega el metodo "clearTimeout()" dentro del boton y podremos
detener el "setTimeout()" para que no imprima el mensaje. */
const timeout = setTimeout(() => {
    console.log('ADIOS Y HOLA!!!');
}, 4000)

button.addEventListener('click', () => {
   clearTimeout(timeout) // detiene el tiempo del "setTimeout()"
})

/* AHORA EL "setInterval()" que lo que hace es accionar cierta funcion que uno desea
cada ciertos milisegundos, en este ejemplo lo usamos para hacer un contador */
let cont = 0
const contador = setInterval(() => {
    console.log(cont);
    cont++
},1000)
/* Tambien se puede usar una funcion por aparte de la accion que deseamos que se
accione cada cierto tiempo */
const despedirse = () => {
    console.log('GOOD BYE!!');
}

const interval = setInterval(despedirse, 3000)

/* Y de igual forma podemos pararlos con "clearTimeout()" a través del boton */
button.addEventListener('click', () => {
    clearTimeout(contador) // detiene el tiempo del "setInterval()"
    clearTimeout(interval) // detiene el tiempo del "setInterval()"
 })