// USO DEL OBJETO Math

/* INFORMACION EXTRA: ¿Que es la constante E?
RESPUESTA: es un número irracional, es decir, un número que no o puede 
expresarse como el cociente exacto de dos números enteros, cuyo número de 
decimales que contiene es infinito y, por tanto, estos decimales se siguen 
sin una secuencia lógica. */

// Muestra el valor de la constante E
console.log(Math.E);

// Muestra el valor del numero PI
console.log(Math.PI);

let num = -5;
let num2 = 5.4;
let num3 = 5.8;

/*  Devuelve el valor absoluto de x, que es el numero en positivo en caso 
que este en negativo y se representa en matematicas asi: |x| */
console.log(Math.abs(num));

/* Devuelve el numero redondeado hacia arriba sin importar que sean menor al 
.5 sus decimales */
console.log(Math.ceil(num2));

/* Devuelve el numero redondeado hacia abajo sin importar que sean mayor al 
.5 sus decimales */
console.log(Math.floor(num3));

/* Devuelve la potencia de "x" numero elevado a "y" numero */
// orden --> pow(base, exponente);
console.log(Math.pow(2, 3));

/* Devuelve la raíz cuadrada de x número */
console.log(Math.sqrt(2));

/* Genera un número pseudoaleatorio entre "0" y a "x" numero al multiplicarlo 
por el x numero, pero puede salir numero con decimales de esta forma */
console.log(Math.random() * 100);

/* De esta forma genera el número pseudoaleatorio entre "0" y el "x" numero
de igual forma multiplicado por el mismo "x" número, pero agregando el metodo 
"Math.round" para que devuelva un numero entero */
console.log(Math.round(Math.random() * 100));

// De esta forma obtenemos el numero pseudoaleatorio entre "x" número y "y" número
console.log(Math.round(Math.random() * (5 - 3) + 3));

 /* Devuelve un numero convirtiendolo a entero en caso de que sea un numero con 
 decimales, el cual redondea de la forma normal */
 console.log(Math.round(7.6456));

/* Devuelve el numero 1, en caso de que el numero que pusimos sean positivo, 
devuelve el numero -1, en caso del que el numeor que pusimos sean negativo y
por ultimo devuelve un 0 si el numero puesto es un 0 */
console.log(Math.sign(-9));
