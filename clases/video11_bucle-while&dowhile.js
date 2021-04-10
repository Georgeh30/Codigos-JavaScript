/*  Uso de los bucles while y dowhile
La Diferencia entre los dos es que e while sí la condicion se cumple desde un
inicio, entonces no ingresara a lo que este dentro de while, pero en do-while,
si la condicionse cumple desde un inicio, entonces solo ingresara dentro del 
do-while, solo la primera vez, pero ya despues de esa no volvera a entrar */

let pass = '';

// Bucle While
while (pass != 'hola') {
    pass = prompt('Introduzca su contraseña:');
}

console.log('Fin del bucle');


// Bucle Do-While
do {
    pass = prompt('Introduzca su contraseña:');
} while (pass != 'hola');
