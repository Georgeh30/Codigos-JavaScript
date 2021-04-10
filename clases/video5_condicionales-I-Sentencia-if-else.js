// Uso de los condicionales en javascript

let num = 5;
let num2 = -1;
let num3 = 0;

// Condicional Simple
if (num > 0) {
    console.log(`${num} es mayor que 0`);
    console.log('Hola Mundo');
}

// Condicional Compuesto
if (num2 > 0) {
    console.log(`${num2} es mayor que 0`);
} else {
    console.log(`${num2} es menor que 0`);
}

// Condicional Multiple
if (num3 > 0) {
    console.log(`${num3} es mayor que 0`);
} else if (num3 < 0) {
    console.log(`${num3} es menor que 0`);
} else {
    console.log(`${num3} es igual que 0`);
}


/* OPERADORES LOGICOS
&& --> and
|| --> or
! --> no
?? --> fusion de nulos
*/

let nume1 = 1;
let nume2 = 5;

// Condicion &&
if (nume1 > 0 && nume2 > 0) {
    console.log(`${nume1} y ${nume2} son mayores que 0`);
}

// Condicion ||
if (nume1 > 0 || nume2 > 0) {
    console.log(`${nume1} o ${nume2} son mayores que 0`);
}

// if else anidados
if (nume1 > 0) {
    if (nume2 > 0) {
        console.log(`${nume1} y ${nume2} son mayores que 0`);        
    } else if (nume2 < 0) {
        console.log(`${nume1} es mayor que 0 y nume 2 es menor que 0`);
    } else {
        console.log(`${nume1} es mayor que 0 y nume 2 es igual que 0`);
    }
} else if (nume1 < 0) {
    if (nume2 > 0) {
        console.log(`${nume1} no es mayor que y ${nume2} es mayor que 0`);        
    } else if (nume2 < 0) {
        console.log(`${nume1} y ${nume2} son menores que 0`);
    } else {
        console.log(`${nume1} es menor que 0 y nume 2 es igual que 0`);
    }
} else if (nume2 > 0) {
    if (nume2 > 0) {
        console.log(`${nume1} es igual que 0 y ${nume2} es mayor que 0`);        
    } else if (nume2 < 0) {
        console.log(`${nume1} es igual que 0 y ${nume2} son menor que 0`);
    } else {
        console.log(`${nume1} y ${nume2} son iguales que 0`);
    }
}


let word = 'Hola';

// Uso del metodo "length" para contar el numero de letras que tiene una palabra
if (word.length > 4) {
    console.log(`${word} tiene mas de 4 letras`);
} else if (word.length < 4) {
    console.log(`${word} tiene menos de 4 letras`);
} else {
    console.log(`${word} tiene 4 letras`);
}

let respuesta = true;

// Uso de booleanos a traves de la forma normal
if (respuesta == true) console.log(`Respuesta tiene el valor de True`);
if (respuesta == false) console.log(`Respuesta tiene el valor de False`);

// Uso de booleanos sin poner true o false en la condicion
if (respuesta) console.log(`Respuesta tiene el valor de True`);
if (!respuesta ) console.log(`Respuesta tiene el valor de False`);
