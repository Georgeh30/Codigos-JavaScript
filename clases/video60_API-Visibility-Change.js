/* Uso de la API Vibility Change
Para cuando tengamos un video reproduciendoce y cambiemos de pestaña, lo que hace
es pausarlo */

const video = document.getElementById('video')

/* OPCION 1 */
/* Evento "visibilitychange" que detecta cuando cambiamos de pestaña */
addEventListener('visibilitychange', (e) => {
    /* si "document.visibilityState" es igual al valor "visible" */
    if (document.visibilityState === 'visible') {
        console.log('PLAY');
        video.play() // reproducimos el video
    
    } else if (document.visibilityState === 'hidden') { /* y si es "hidden" */
        console.log('PAUSE');
        video.pause() // pausamos el video
    }
})
/* FIN OPCION 1 */

/* OPCION 2 */
/* para reproducir o pausar cuando cambiamos de pestaña o regresamos a la pestaña del video */
addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())
/* FIN OPCION 2 */