/* Uso de distintas expresiones regulares
 */

/*
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de 
        caracteres u operaciones de sustituciones.
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    Página para evaluar expresiones regulares: https://regex101.com/
    sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después de la primera coincidencia
    Comodines:
        -Sustitución: Define un comodín dentro del patron. El símbolo es el "."
        -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos. 
        [aeiou] Con esto cogeríamos todas las vocales
        -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas.
        Tabla ASCII https://ascii.cl/es/
        -Mezcla entre rangos y listas: 
            Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u"
        -Cadenas completas:
            Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es 
            válida la palabra "lorem" y la palabra "amet"
    Delimitadores:
        ^ Antes de este símbolo no puede haber nada
        $ Después de este símbolo no puede haber nada
        ^hola$
    Cantidad:
        - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles. 
            {n} Se tiene que repetir n veces
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir como mínimo n veces y sin máximo
        ^[a-zA-Z]{1,3}@{1}$
        -asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*
        -interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
            ^[ae]?$ 
        - operador +: lo que está antes del + tiene que estár una vez como mínimo
        A-[0-9]+
    
    Caracteres:
        \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de 
        carro. ^[a-zA-Z]+\s[a-zA-Z]+$
        \S: Coincide con todo menos caracteres de espacio ^\S{5}$
        \d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$
        \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9] ^\D{5}$
        \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
        \W: Coincide con todo menos caracteres de palabra. ^\W+$
       
*/

/* Obtenemos el texto ".textContent" de la etiqueta donde tenga como atributo id con
valor llamado "text" */
const text = document.getElementById('text').textContent

/* INICIO DE USO DE BANDERAS */
/* 
g - Global (hace coincidir el patrón todas las veces posibles, aunque puede variar según el método) 
i - Insensitive (ignora las mayúsculas y minúsculas).
m - Multiline (los caracteres ^ y $ pueden coincidir con caracteres multilínea).
*/
/* guardamos la expresion regular que indica que busque la palabra "lorem" sin
tomar encuenta las mayusculas "i" y que encuentre todas las que alla "g" */
const regEx = /lorem/gi // esto es una expresion regular en js
/* segunda forma de crear una expresion regular */
const regEx2 = new RegExp('lorem', 'gi') // esto es una expresion regular en js
/* tercera forma de crear una expresion regular */
const regEx3 = new RegExp('/lorem/', 'gi') // esto es una expresion regular en js

/* que coinsida la palabra "lorem" */
console.log(regEx.test(text));
/* otra forma de buscar que coinsida con la palabra "lorem" */
console.log(text.includes('lorem'));
/* FIN DE USO DE BANDERAS */

/* EJEMPLOS
/jo..e/g -> indica que busque palabras que empiecen con "jo" despues que tengan
            dos caracteres mas en medio ".." y al final termine con "e"

/fot.\.jpg/g -> indica que bueque una palabra que empiece con "fot", despues que 
                tenga un caracter mas ".", tambien que lo que va despues de "\" 
                que se tome comoel caracter que es y no como un comodin ".", que 
                termine con los caracteres ".jpg"

[aeu] -> indica que busque las letras por separado, osea quew busque las "a", 
         las "e" y las "u" dentro de un texto

[123] -> igual con numeros, que busque por separado cada numero.

[a-d] -> indicamos que busque las letras entre el rango de "a" hasta la "d", pero
         en base a la tabla "ascii" que "a" tiene codigo 97 y "d" tiene 108

[0-5ou] -> indicamos que todos los numeros en el rango del 0 al 5 y el caracter 
           "a" y el caracter "u"

(12) -> para buscar por conjunto de letras o numeros, indicamos que busque el 
        numero 12

(Lorem|amet) -> indicamos que busque dos palabras, la primera es "Lorem" y la 
                segunda es "amet"

"^hola$" -> indicamos que busque la palabra "hola" sin que tenga caracteres 
            antes "^" y que no tenga caracteres despues "$" de la palabra

^[a-zA-Z]{1,3}@{1}$ -> decimos que no debe tener mas caracteres antes "^", que
                       que debe haber primero entre todo el texto que escribamos
                       una letra entre "a" a la "z" ó letra entre "A" a la "Z",
                       que tiene que estar estas letras como minimo "1" y maximo
                       "3", que despues debe haber un "@" que solo puede estar una
                       vez y al final del texto no tenga mas caracteries "$"
                    
a{1} -> indicamos que la letra "a" minimo y maximo 1 vez

a{3,} -> indicamos que la letra "a" minimo debe estar 3 veces y maximo sin limites

.*@.*\..* -> indicamos que antes de la "@" puede haber cualquie letra, numero y 
             en cualquier cantidad de veces, de igual forma despues del "@" puede 
             haber cualquier texto, despuesdebe haber un punto y despues del punto
             puede haber cualquier cosa o puede no haber nada mas

 ^[ae]$ -> indicamos que podemos tener una letra "a" o una letra "e"

 ^[ae]?$ -> indicamos que podemos tener una letra "a" o una letra "e", pero con
            el simbolo "?", indicamos que si existe alguna de estas letras, que 
            solo puede exister 1 sola vez y si no existe alguna de esas letras
            no pasa lo toma como valido

A-[0-9]+ -> indicamos que debe haber la letra "A" junto con el simbolo "-", 
            tambien que como minimo debe haber un numero entre el 0 al 9 y 
            maximo sin limite, esto lo hacemos con el simbolo "+" 

^[a-zA-Z]+\s[a-zA-Z]+$ -> indicamos que valide dos palabras que contengan como
                          minimo letras entre la "a" a la "z" ó "A" a la "Z" y
                          que entre estas dos palabras exista un espacio o un 
                          tabulador por parte del teclado, indicado con el 
                          simbolo "\s" ó que no tenga espacio o tabulador con
                          el simbolo "\S"

^\S{5}$ -> indicamos que debe de haber una palabra de 5 letras y ningun espacio  

^\d{5}$ -> indicamos que debe haber 5 numeros

^\D{5}$ -> indicamos que debe haber 5 letras y ninguno debe ser un numero

^\w+@$ -> indicamos que tenga una palabras alfanumerico o tambien guin bajo "_" 
          de uno o mas caracteres y un "@"

^\W+@$ -> indicamos que tenga una seria de simbolos ya sean "-.!?" entre otros
          menos los alfanumericos y el simbolo "_" y al final un "@"

*/