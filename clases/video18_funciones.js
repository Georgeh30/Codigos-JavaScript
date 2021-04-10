// Uso de las funciones y sus dos tipos de sintaxis

/* 
// Sintaxis de funciones antiguo
function nombreFuncion(){
    // Codigo a ejecutar
}

// Sintaxis de funciones nuevas
const nombreFuncion = () =>{
    // Codigo a ejecutar
}
*/

// Uso de la funcion antigua
function saludar1() {
    console.log("Hola1");
}

// Uso de la funcion nueva sin poner parametros
const saludar2 = () => console.log("Hola2");

// Uso de la funcion nueva indicando un parametro
const su = (user) => console.log(`Hola ${user}`);

saludar1();
saludar2();
su("Jorge");

/* Para retornar un valor de una funcion, en el caso de que solo sea una linea
de codigo, la cual va a estar dentro de la funcion, no se debe poner las llaves{} 
y no es forzoso poner "return", ya que el poner las llaves{} indica que vamos a 
usare mas de una linea de codigo dentro de la funcion, y entonces la funcion va a 
pedir el uso forzoso de return */

// funcion donde se devolvera la suma de dos numero sin usar las llaves{} y "return"
const suma1 = (num1, num2) => num1 + num2;

/* Funcion que devuelve un valo pero se usa mas de una linea, donde se debe poner 
las llaves{} y el return */
const suma2 = (num1, num2) => {
    if (num1 == 2) {
        return num1 + num2;
    }
    return num1;
}

console.log(suma1(2, 3));
console.log(suma2(123, 334));
