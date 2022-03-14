
/*
    ===== Código de TypeScript =====
*/

// ##############################################
//          DESESTRUCTURACIÓN DE OBJETOS
// ##############################################


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: Detalle;
}

interface Detalle {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalle: {
        autor: 'Ed Sheeran',
        anio: 2018
    }
}

// console.log('El volumen actual es de: ', reproductor.volumen);
// console.log('El segundo actual es el: ', reproductor.segundo);
// console.log('La canción actual es : ', reproductor.cancion);
// console.log('El autor actual es: ', reproductor.detalle.autor);

const autor = 'Fulanito';

// Podemos definir un grupo de constantes a la vez para evitar el estar poniendo reproductor.volumen, reproductor.segundo..... 
// Como 'detalle' a su vez es un objeto anidado, debemos hacerlo en 2 pasos
// También podemos asignarles alias en el supuesto de que ya estemos usando el mismo nombre en una variable o constante, etc...
const { volumen, detalle, segundo, cancion } = reproductor;
const { autor: cantante } = detalle;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es el: ', segundo);
console.log('La canción actual es : ', cancion);
console.log('El autor actual es: ', cantante);



// ##############################################
//          DESESTRUCTURACIÓN DE ARRAYS
// ##############################################

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// Para desestructurar objetos lo hacemos con llaves ({}), para desestructurar arrays lo hacemos con corchetes ([])
// En la desestructuración de objetos no es importante el orden de las propiedades porque como cada una hace referencia a su nombre da igual
// En la de arrays sí, el orden en que yo asigno los nombres es el orden de la posición del array a la que hace referencia
const [ goku, vegeta, trunks] = dbz;

// console.log('Personaje 1:', dbz[0]);
// console.log('Personaje 2:', dbz[1]);
// console.log('Personaje 3:', dbz[2]);

console.log('Personaje 1:', goku);
console.log('Personaje 2:', vegeta);
console.log('Personaje 3:', trunks);


const dbz2: string[] = ['Krilin', 'Yamcha', 'Picolo'];

// Si por lo que sea yo sólo quiero usar 1 elemento del array, no hace falta desestructurar el resto, podemos hacerlo así:
const [ , , p3] = dbz2;

console.log('La tercera posición de dbz2 es:', p3);

// Si en un casual hubiera un array dentro de otro array podríamos hacer una desestructuración en 2 pasos como hicimos con los objetos

