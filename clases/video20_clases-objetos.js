// Uso de Clase y Objetos

class Libro {
    constructor(titulo, autor, year, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.year = year;
    }

    // Metodo para obtener el autor
    getAuthor() {
        return this.autor;
    }

    // Metodo para obtener el genero
    getGender() {
        return this.genero;
    }

    // Metodo para obtener toda las caracteristicas de los libros
    infolibro() {
        return `El libro ${this.titulo} del autor ${this.autor}, del año 
        ${this.year}, con el genero ${this.genero}`;
    }

}

arreglolibros = [];

//Ciclo para obtener por teclado la informacion de cada libro
while (arreglolibros.length < 3) {
    let title = prompt('Introduce el título del libro:');
    let author = prompt('Introduce el autor del libro:');
    let year = prompt('Introduce el año del libro:');

    /* linea de codigo para obtener el genero del libro, usando el metodo 
    "toLowerCase()", el cual sirve para convertir las letras en minúsculas */
    let gender = prompt('Introduce el genero del libro:').toLowerCase();

    /* condicion para validar que contenga informacion cada variable, tambien 
    que el genero sea alguno de los 3 indicados */
    if (title != '' && author != '' && !isNaN(year) && year.length == 4 &&
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')) {
        
        // metodo "push" que sirve para agregar un nuevo elemento al arreglo
        arreglolibros.push(new Libro(title, author, year, gender))

    }
}


// Funcion para mostrar toda la informacion de cada libro
const mostrarLibros = () => {
    console.log(arreglolibros);
}

// Funcion para mostrar los autores de cada libro
const mostrarAutores = () => {
    let authors = [];

    // ciclo para mostrar cada uno de los autores dentro del "arreglolibros"
    for (const libro of arreglolibros) {
        authors.push(libro.getAuthor())
    }

    // Metodo "sort()" para acomodar por abecedario los nombres de los autores
    console.log(authors.sort());
}

// Funcion para buscar el genero y mostrar los libros que tengan el mismo genero buscado
const mostrarGeneros = () => {
    const gender = prompt('Introduce el género a buscar: ');
    for (const libro of arreglolibros) {
        if(libro.getGender() == gender) {
            console.log(libro.infolibro());
        }
    }
}

// Mandando a llamar las 3 funciones
mostrarLibros();
mostrarAutores();
mostrarGeneros();