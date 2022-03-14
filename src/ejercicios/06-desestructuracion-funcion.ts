
/*
    ===== Código de TypeScript =====
*/

// ################################################################
//          DESESTRUCTURACIÓN DE ARGUMENTOS DE UNA FUNCIÓN
// ################################################################

export interface Producto {
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    descripcion: 'iPad Air',
    precio: 350
}

export function calculaIVA(productos: Producto[]): [number, number]
{
    let total = 0;
    
    // Forma clásica
    // productos.forEach( (item) => {
    //     total += item.precio;
    // });

    // Desestructurando
    productos.forEach( ({ precio }) => {
        total += precio;
    });

    return [total, total * 0.21];
}


const articulos = [telefono, tableta];
const total_IVA = calculaIVA(articulos);

const [ total, iva ] = total_IVA;

console.log("El total es:", total);
console.log("El IVA es:", iva);
