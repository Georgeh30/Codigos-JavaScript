// Uso de las clases

class Persona {
    // Sintaxis del constructor, el cual siempre debe llamarse "constructor"
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} 
        años`;
    }

    // Esta es la sintaxis de un metodo dentro de una clase
    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Manera de Inicializar una Clase
const jorge = new Persona('Jorge', 'García', 29);

// Formas de imprimir uno o varios de los datos de un objeto
console.log(jorge.nombre + " ó " + jorge['nombre']);
console.log(jorge.saludar() + " ó " + jorge['saludar']());

