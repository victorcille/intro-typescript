
/*
    ===== Código de TypeScript =====
*/

// Las importaciones se hacen una desestructurando el fichero que estamos importando
import { Producto, calculaIVA } from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        descripcion: 'Teloéfono 1',
        precio: 100
    },
    {
        descripcion: 'Teloéfono 2',
        precio: 150
    }
];

const [total, iva] = calculaIVA(carritoCompras);

// Si nos fijamos en la consola del navegador, veremos que se imprimen también los console log del fichero 06-desestructuracion-funcion.ts
// Esto es porque al importar la función calculaIVA() se ejecuta también el resto del código del fichero.
// Con las interfaces no pasa, con las interfaces sólo se importa la interfaz pero no se ejecuta el resto del código 
console.log(total);
console.log(iva);

