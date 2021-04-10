// Uso de los objetos

const person = {
    name: 'Jorge',
    age: 29,
    sons: ['Maria', 'Diego', 'Lalo', 'Mole', 'Lilo']
}

// Dos forma sencillas de llamar el valor de una llave o clave
console.log(person.name + " ó " + person['name']);

// Muestra los nombres de cada key o clave
for (const key in person) {
    console.log(key);
}

// Muestra los elementos de value
for (const key in person) {
    console.log(person[key]);
}

/* Muestra la posicion de cada elemento del arreglo dentro de la clave o llave 
llamada "sons" */
for(const son in person.sons){
    console.log(son);
}

/* Muestra cada elemento del arreglo dentro de la clave o llave 
llamada "sons" */
for(const son1 of person.sons){
    console.log(son1);
}

/* Muestra la cadena de informacion y el arreglo con ayuda del metodo (join()), 
el cual sirve para unir todos los elementosa dentro del arreglo y su parametro de 
join() sirve para separ por algun caracter, en este caso por guion medio */
console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman 
${person.sons.join('-')}`);
