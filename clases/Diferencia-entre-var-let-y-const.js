/* Uso de los  */

/* 
Si se necesita una variable vacia en la cual mas adelante llenaremos con datos,
regularmente se usa la variable "var"
Y regularmente si requerimos que una variable este definida con un valor inicial,
usamos la variable "let"
var - puede ser global dentro de una funcion si es que se encuentra dentro de un
      bucle, pero fuera de la funcion no estara definida
let - en caso de estar en un bucle, el cual esta dentro de una funcion, no se puede
      usar fuera del bucle.
*/


const foo = () => {

    /* De esta forma no le damos un valor y por default tiene como valor "undefined" */
    var r

    /* "var" permiten modificar el valor inicial */
    var a = 5
    a = 10

    /* De esta forma no le damos un valor y por default tiene como valor "undefined" */
    let y

    /* let" permiten modificar el valor inicial */
    let b= 3
    b = 6

    /* "const" no perimite modificar el valor inicial, es un valor estatico */
    const c = 2

    /*  */
    for (var i = 0; i < 10; i++) {
        /* Si puede ser usada dentro del bucle y dentro de la funcion pero 
        fuera del bucle, solo no puede ser usada fuera de la funcion */
        var mensaje = 'Hola'
        /* No puede ser usada fuera de este bucle "for" */
        let mensaje2 = 'holaaa'
        console.log(i);     
    }

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(r);
    console.log(y);
    console.log(mensaje);
}

foo()

