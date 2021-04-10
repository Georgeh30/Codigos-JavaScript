/* Uso de la API Match Media 
Para cambiar el estilo de una pagina o hacer alguna accion
cuando cambie de dimensiones la pagina web */
 
/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
    mql = window.matchMedia(mediaQueryString)
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/


const title = document.getElementById('title')

/* mql (media query) --> guardamos la logica responsive */
const mql = matchMedia('(min-width:400px) and (orientation: landscape)')

/* funcion para aplicar la logica responsive de nuestra variable "mql" */
const applyMatchMedia = mql => {
    /* para evaluar si encaja  */
    mql.matches ?
        //NO HACER ESTO NUNCA, YA QUE A TRAVÉS DE JS NO SE DEBERIA DAR ESTILOS AL HTML
        document.body.style.backgroundColor = 'red'  // cambiamos el color
        //ESTO SI
        // title.classList.add('clase que sea')
        :
        //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'royalblue'
        //ESTO SI
        // title.classList.remove('clase que sea')
}

/* Evento "resize" para cuando la pagina web sufra un cambio de tamaño se accione */
addEventListener('resize', () => applyMatchMedia(mql)) // y aplique el cambio de estilo

/* Evento "DOMContentLoaded" es disparado cuando el documento HTML ha sido completamente cargado y parseado
y en este caso cuando pase esto, ejecutara la funcion "applyMatchMedia()" obteniendo
como parametro la variable de hasta arriba "mql" */
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))






