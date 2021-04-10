/* Uso de la Depuracion de Codigo
Consola de depuracion de google 
Para usarlo hay que presionar en el navegador "F12"
despues en la pestaña "Sources", buscamos de lado izquierdo
la carpeta donde esta nuestro archivo, lo seleccionamos,
nos mostrara el codigo y podremos detener el codigo por linea
de codigo consolo dar click encima de un numero de linea de codigo
que aparecen de lado izquierdo del codigo
*/

/* 
Tutorial chrome https://developers.google.com/web/tools/chrome-devtools/javascript?hl=es
*/

/* CODIGO PARA EL EJEMPLO DE DEPURACION EN LA CONSOLA DE GOOGLE */
const form = document.getElementById('form')
const resultElement = document.getElementById('result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.number1.value != '' && e.target.number2.value != '') {
        const number1 = parseInt(e.target.number1.value)
        const number2 = parseInt(e.target.number2.value)
        const result = number1 + number2
        resultElement.textContent = `${number1} + ${number2} = ${result}`
        e.target.reset()
    }
})






