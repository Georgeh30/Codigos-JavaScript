// Metodo para uso de cadenas Strings

let cadena = "Hola Mundo";

// Muestra el numero de caracteres 
// y espacios dentro del String
console.log("Numero de Caracteres: " + cadena.length);

// Muestra el valor del String en MAYUSCULAS
console.log("String en MAYUSCULA: " + cadena.toUpperCase());

console.log("String en minuscula: " + cadena.toLocaleLowerCase());

// Devuelve el numero de la posicion inicial 
// donde encontro la palabra dentro del String
// Si no lo encuentra devuelve -1
console.log("Muestra la posicion de la Palabra: " + cadena.indexOf("Hola"));

// Reemplaza palabra o letra por el ingresado en el segundo parametro
console.log("Reemplaza palabras: " + cadena.replace("Mundo", "Youtube"));

// EL METODO SUBSTRING NO PERMITE POSICIONES NEGATIVAS
// Muestra el String a partir de la posicion indicada
console.log("Muestra desde la posicion indicada hasta la final: " + cadena.substring(3));

// Muestra el String desde la posicion indicada
// hasta la segunda posicion indica
console.log("Muestra desde cierta posicion hasta cierta posicion: " + cadena.substring(3, 8));

// EL METODO SLICE PERMITE POSICIONES NEGATIVAS
// Muestra el String de la posicion contada desde el ultimo que es -1 hacia atras
console.log("Muestra contada desde la posision negativa final :" + cadena.slice(-3));

// Muestra el String desde la posicion contada... 
// del ultima hacia atras hasta la posicion mas cercana a la ultima
console.log("Muestra desde la posicines negativas inicial y final: " + cadena.slice(0, -6));
 

let cadena2 = " Prueba Quitando espacio del inicio y del final ";

// TRIM ELIMINA ESPACIO AL PRINCIO Y AL FINAL DE LA CADENA DE TEXTO
console.log("Elimina los espacio dentro de la Cadena String: " + cadena2.trim())

// Devuelve un True o False si empieza la cadena de texto con la letra o palabra "h"
// Tambien detecta mayusculas y minusculas
console.log(cadena.startsWith("H"));

// DEVUELVE FALSE POR NO EMPEZA CON "a" LA CADENA DE TEXTO
console.log(cadena.startsWith("a"));

// AQUI EMPIEZA A COMPROBAR QUE EMPIEZE CON LA LETRA "M" DESDE LA POSICION "8"
console.log(cadena.startsWith("M", 5));

// Devuelve un True o False si la cadena de texto termina con la letra o palabra "o"
console.log(cadena.endsWith("o"));

// En este verifica si termina con "n" pero dandole como posicion final el numero "8"
console.log(cadena.endsWith("n", 8));

// Verifica si la variable llamada () termina con la palabra "Mundo"
console.log(cadena.endsWith('Mundo'));

// Parecido al indexOf pero este devuelve true o false si encuentra o no encuentra
// la palabra o letra que pedimos buscar
console.log(cadena.includes('n'));

// En este caso le indicamos la posicion desde donde debe empezar a buscar
console.log(cadena.includes('a', 2));

// Retipe el string el numero de veces que le indiquemos
let cadena3 = 'Hola';
console.log(cadena3.repeat(3));
console.log('repetir'.repeat(10));

// TEMPLATE STRINGS

// Variables
let nombre = 'Jorge';
let apellido = 'Alvarado';
let edad = 20;

// Primera manera de imprimir cadenas de texto
console.log("Hola " + nombre + " " + apellido + ", tienes " + edad + " años.");

// Segunda manera mas comoda de imprimir cadenas de texto, pero debe estar 
//dentro de ACENTOS GRAVES.
console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años.`);