//

/*  El metodo getElementById() sirve para seleccionar la etiqueta 
html que contenga en su atributo id el nombre asignado, poniendo el mismo nombre 
dentro de los parentesis del getElementBiId() */

/* la funcion prompt() sirve para ingresar a través del teclado informacion, ya 
que genera una ventana en la pagina web donde podemos ingresar un dato. */

// Guardamos el nombre del id del html en una variable estatica en javascript
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = new String(prompt('Indroduzca el primer número:'));
let b = new String(prompt('Indroduzca el segundo número:'));
let c = new String(prompt('Indroduzca el tercero número:'));

/* la propiedad textContent sirve para indicar que agregue informacion
mandada desde javascript a la etiqueta html ligada a través del nombre
del atributo id, en este caso con "numbers" */
numbers.textContent = `Los números introducidos son ${a}, ${b}, ${c}`;

/* Codigo para ordenar de mayor a menor los numero ingresados */

if (a>=b && a>=c) {
    if (b>c) {
        result.textContent = `El orden es: ${a}, ${b}, ${c}`;
    } else {
        result.textContent = `El orden es: ${a}, ${c}, ${b}`;
    }
} else if (b>=a && b>=c) {
    if (a>c) {
        result.textContent = `El orden es: ${b}, ${a}, ${c}`;
    } else {
        result.textContent = `El orden es: ${b}, ${c}, ${a}`;
    }
} else if (c>=a && c>=b) {
    if (a>b) {
        result.textContent = `El orden es: ${c}, ${a}, ${b}`;
    } else {
        result.textContent = `El orden es: ${c}, ${b}, ${a}`;
    }
    
}
