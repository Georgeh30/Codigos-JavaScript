/* Uso de for-of y for-in
for-on - es usado para mostrar la informacion de cada elemento dentro de un 
arreglo 
for-in - es usado para mostrrar el indice de cada posicion de un arreglo, 
aunque mayormente es usado para los objetos */

// Forma original usando break para terminar el bucle cuando se cumpla una condicion
for (i = 0; i < 1000; i++) {
    if (i == 3) { break; }
    console.log("Contador: " + i);
}

// Forma original usando continue para ignorar una parte del bucle
for (i = 0; i < 10; i++) {
    if (i == 3) { continue; }
    console.log("Contador1: " + i);
}

let names = ['Jorge', 'Juan', 'Josue', 'Javier'];

// USO DEL BUCLE FOR-OF

// Muestra la informacion en cada posicion dentro del arreglo
for (let variable of names) {
    console.log(variable);
    // Sacar el indice
    console.log("Posicion " + names.indexOf(variable));
}

// USO DEL BUCLE FOR-IN

// Muestra el indice de cada posicion dentro del arreglo
for (let indice in names) {
    console.log(indice);
    // Sacar la informacion de cada indice
    console.log(names[indice]);
}

// USO DEL BUCLE FOREACH

// Muestra la informacion dentro de cada posicion del arreglo
names.forEach(variable => {
    console.log(variable);
});

/* Muestra la informacion dentro de cada posicion del arreglo y le agregamos el 
contador para cada posicion que se va incrementando automaticamente */
names.forEach((variable, i) => {
    console.log(variable + " = posicion " + i);
});

// USO DEL METODO MAP()

// Ayuda a ir en este caso elevando al cuadrado cada uno de los numeros dentro del arreglo
const nav = [2, 5, 7];
const navConFormato = nav.map((variable_nueva) => Math.pow(variable_nueva, 2));
console.log(navConFormato);

// Ayuda a agreagar mas texto a cada uno de los elementos dentro del arreglo
const nav2 = ['Home', 'About', 'Location', 'Contact'];
const navConFormato2 = nav2.map((variable_nueva) => `<li>${variable_nueva}<li>`);
console.log(navConFormato2);

// USO DEL METODO REDUCE()

/* Sirve para tener un codigo mas limpio, en el ejemplo de abajo realiza la suma de cada uno 
de los elementos dentro de un arreglo con ayuda de reduce() hace la accion de izquierda a 
derecha, que seria sumanto el de la posicion 0 con el de la posicion 1, las cuales las 
asigna como variable a y variable b, y una vez sumadas como aun siguie habiendo mas elementos
convierte la suma realizada del indice 0 y 1 en la variable a y el indice 2 lo convierte en
la variable b y vuelve hacer la suma y asi susecivamente hasta que los elementos del arreglo
se conviertan en un solo elemento y los guarde en la variable llamada "suma" */
const suma = [10, 20, 30].reduce((a, b) => a + b);
console.log(suma);

/* Segundo ejemplo, contar la cantidad de nombres repetidos */
const nombres = ['Jorge', 'Maria', 'Jose', 'Bob', 'Pat', 'Maria', 'Jose', 'Jose'];
const cantidadNombres = nombres.reduce((contadorNombre, nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    return contadorNombre;
}, {});
console.log(cantidadNombres);

// USO DEL METODO FILTER()

/* permite filtrar solo los elementos que deseamos (segun ciertos criterios) y 
devolverlos en un nuevo array. */
let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6];
let greaterTen2 = numbers.filter(number => number > 10 );
console.log(greaterTen2);

// Segundo ejemplo donde obtenemos el score mayor o igual a 11
let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ]
  let approved = students.filter(student => student.score >= 11);



// OTRO PROGRAMAS QUE HAY QUE QUITAR DE AQUI

/* var c = prompt("Ingrese la dimensiones:");
var cuadro = "";
for (var i = 0; i < c; i++) {
    for (var j = 0; j < c; j++) {
        cuadro += "* ";
        
    }
    document.write(cuadro + "<br>");
    console.log(cuadro + "\n");
    cuadro = "";
} */

/* var matrix = [
    [2, 3, 4],
    [5, 6, 7]
];
var columns1 = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));  
console.log(columns1); */

/* function promedio() {
    var p = (10 + 8 + 9) / 3;
    return p;
}

console.log(promedio()); */

/* et array = [
    {
        name: "cesar",
        last_name: "aldo",
        age: 26
    },
    {
        name: "jorge",
        last_name: "torres",
        age: 29
    }
];

let datos = document.getElementById('datos');
let cuerpo = document.createElement('tbody');

array.forEach(p => {
    let fila = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = p.name;
    fila.appendChild(td);

    td = document.createElement('td');
    td.innerText = p.last_name;
    fila.appendChild(td);

    td = document.createElement('td');
    td.innerText = p.age;
    fila.appendChild(td);

    cuerpo.appendChild(fila);
});
datos.appendChild(cuerpo); */