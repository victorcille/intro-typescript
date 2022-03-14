
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];   // Opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void 
{
    // Como hijos es una propiedad opcional, para el pasajero1 va a saltar un error porque no puede hacer el length de un undefined
    // const cuantosHijos = pasajero.hijos.length;

    // Para evitar esto, podemos hacer esto: si tiene hijos devuelve length y si no devuelve 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);
