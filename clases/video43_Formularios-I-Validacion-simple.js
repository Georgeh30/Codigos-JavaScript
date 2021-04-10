/* Uso de los Formularios 
validacionde un formulario*/

const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name') // nombre
const email = document.getElementById('email') // correo electronico
const gender = document.getElementById('gender') // genero
const terms = document.getElementById('terms') // termino

/* Objeto que servira para validar cada campo del formulario */
const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

/* metodo para activar el evento de entrega de datos obtenidos del form */
form.addEventListener('submit', (e) => {
    /* detenemos la recarga o cambio de pagina */
    e.preventDefault()

    /*  */
    validateForm()
})

/* todo para activar el evento de cambio "change" del objeto html, el cual 
al escribir dentro de objeto html y seleccionamos otro objeto html es cuando
se activa */
name.addEventListener('change', (e) => {
    /* sí el valor ".value" o texto que se escribio en el recuadro de texto
    sin espacios ".trim()" es mayor ">" que 0 entra al if */
    if (e.target.value.trim().length > 0) {
        /* convertimos a "true" el valor en la clave name 
        del objeto "formIsValid" */
        formIsValid.name = true
    }
})

email.addEventListener('change', (e) => {
    /* sí el valor ".value" o texto que se escribio en el recuadro de texto
    sin espacios ".trim()" es mayor ">" que 0 entra al if */
    if (e.target.value.trim().length > 0) {
        /* convertimos a "true" el valor en la clave name 
        del objeto "formIsValid" */
        formIsValid.email = true
    }
})

gender.addEventListener('change', (e) => {
    /* sí alguno de los dos "radiobutton" esta seleccionado ".checked" ó esta en 
    "true" */
    if (e.target.checked == true) {
        /* Entonces cambiamos el valor de la clave gender del objeto "formIsValid" */
        formIsValid.gender = true
    }
})

terms.addEventListener('change', (e) => {
    /* obtenemos "true", sí esta seleccionado el "checkbox" o "false", sí 
    no esta seleccionado el "checkbox" y en cualquiera de los dos caso, guardamos
    ese valor en el valor de la clave "terms" qu esta dentro del "formIsValid" */
    formIsValid.terms = e.target.checked

    /* Y entonces con un (operador condicional tenario) decimos que, sí es "true"
    o esta seleccionado el "checkbox" entonces quite el valor desactivado "disables"
    con el metodo ".removeAttribute()" y en caso de ser "false" o que no este 
    seleccionado el "checkbox", entonces que indique que el valor desactivado 
    "disabled" este activado "true" con el metodo ".setEttribute()" */
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)
})

/*  */
const validateForm = () => {
    /* Convertimos el Objeto "formIsValid" en un arreglo, quitando sus claves
    de cada valor y convirtiendolos en indices empezando desde el 0 */
    const formValues = Object.values(formIsValid)
console.table(formValues)
    /* el metodo ".findIndex()" ejecuta la función de callback una vez por cada 
    índice del array hasta que encuentre uno donde callback devuelva, en este 
    caso, un valor "false" y en ese momento devuelve la posidcion de ese */
    const valid = formValues.findIndex(value => value == false)

    /* si la posicion que se obtubo es -1, quiere decir que no encontro ninguna
    posicion que tuviera "false" */
    if (valid == -1) {
        /* entonces entra y ejecuta el metodo entregar ".submit()" para el "form",
        para mandar o entregar un formulario */
        form.submit()
    } else {
        /* Si no es -1, entonces quiere decir que no encontro ningun false */
        alert('Form invalid') // y entonces muestra alerta
    }

}




