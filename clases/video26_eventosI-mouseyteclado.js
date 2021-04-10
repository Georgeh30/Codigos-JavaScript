/* Uso de Eventos para el mouse y el teclado */

/* 
EVENTOS DE MOUSE:
    click - cuando pulsamos el botón izquierdo del ratón
    dbclick - cuando pulsamos dos veces seguidas el bóton izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

EVENTOS DE TECLADO:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

/* Conectamos */
const button = document.getElementById('button');
const input = document.getElementById('input');
const box = document.getElementById('box');

/* INICIO DEL CODIGO PARA EVENTOS DEL MOUSE */

/* METODO .addEventListener() PARA DAR UNA ACCION AL BOTON */

/* EVENTO "click" PARA QUE HAGA UNA ACCION AL DAR UN CLICK CON EL MOUSE */
button.addEventListener('click', () => {
    console.log('CLICK');
});

/* EVENTO "dblclick" PARA QUE HAGA UNA ACCION AL DAR DOBLE CLICK CON EL MOUSE */
button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK');
});

/* EL EVENTO "mouseenter" Y "mouseleave" JUNTOS SON EL EQUIVALENTE AL EVENTO 
":hover" de CSS */

/* EVENTO "mouseenter" PARA CUANDO ENTRE EL CURSOR POR EL AREA DEL OBJETO HTML, SE
ACTIVE ESTE EVENTO Y REALICE LA ACCION QUE INDIQUEMOS */
box.addEventListener('mouseenter', () => {
    /* Esta linea de codigo sirve pero no es la recomendada */
    box.style.background = 'green';

    /* Este es la segunda forma de cambiar el color, que es mas recomendado que el anterior */
    box.classList.add('green');

    /* Tercer forma mas recomendada para cambiar de clase por otra para que en este caso realice la accion de cambio de color por medio de selectores CSS */
    box.classList.replace('red', 'green');
});

/* EVENTO "mouseleave" PARA CUANDO SALGA EL CURSOR DEL AREA DEL OBJETO HTML, SE 
ACTIVE ESTE EVENTO Y REALICE LA ACCION QUE INDIQUEMOS */
box.addEventListener('mouseleave', () => {
    /* Esta linea de codigo sirve pero no es la recomendada */
    box.style.background = 'red';

    /* Esta es otra forma de que cambio el color, mandando a llamar el selector de CSS donde especifica el nuevo fondo que tendra la etiqueta HTML que use este selector, pero debemos borrar el selector que se acciono en el evento "mouseleave", porque sobreescribe el selector "red" ya que esta escrito despues (cascada) del selector "green" */
    box.classList.remove('green');
    /* Y una vez borrado el selector "green", podremos usar el selector "red" */
    box.classList.add('red');

    /* Tercera manera de cambiar el color cuando se activa el anterior evento al entrar al area del objeto y debemos borrar esa accion y reemplazarla por la nueva accion en este evento para cuando salga el cursor del area del objeto */
    box.classList.replace('green', 'red');

});

/* EVENTO "mousedown" PARA CUANDO PULSE Y ANTES DE SOLTAR EL BOTON IZQ DEL MOUSE, DENTRO DEL AREA DEL OBJETO HTML, REALICE LA ACCION INDICADA  */
box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO EN LA CAJA');
});

/* EVENTO "mouseup" PARA CUANDO PULSE Y SUELTE EL BOTON IZQ DEL MOUSE, DENTRO DEL AREA DEL OBJETO HTML, REALICE LA ACCION INDICADA  */
box.addEventListener('mouseup', () => {
    console.log('HAS PULSADO EN LA CAJA');
});

/* EVENTO "mousemove" PARA CUANDO MOVAMOS EL CURSOR DEL MOUSE DENTRO DEL AREA DEL OBJETO HTML, REALICE UNA ACCION O CONTEO DEL MOVIMIENTO */
box.addEventListener('mousemove', () => {
    console.log('ESTAS MOVIENDO EL RATON EN LA CAJA');
})
/* FIN DEL CODIGO PARA EVENTOS DEL MOUSE */


/* INICIO DEL CODIGO PARA EVENTOS DEL TECLADO */

/* EVENTO "keydown" PARA REALIZAR UNA ACCION AL MOMENTO DE PULSAR UNA TECLA ESTANDO SELECCIONADO O DENTRO DEL OBJETO DONDE QUEREMOS QUE TENGA ESA ACCION */
input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA');
});

/* EVENTO "keyup" PARA ACTIVAR UNA ACCION AL MOMENTO DE PRESIONAR Y HABER SOLTADO UNA TECLA*/
input.addEventListener('keyup', () => {
    console.log('HAS SOLTADO UNA TECLA');
});

/* EVENTO "keypres" PARA ACTIVAR UNA ACCION AL MOMENTO DE USAR UNA TECLA */
input.addEventListener('keypress', () => {
    console.log('ESTAS PULSADO UNA TECLA');
});
