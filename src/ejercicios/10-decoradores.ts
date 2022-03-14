
/*
    ===== Código de TypeScript =====
*/

// Los decoradores sirven para cambiar las clases en el momento en el que son definidas
// Sirven para añadirle o extenderle más funcionalidades a la clase

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}


@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);  // Esto me saca toda la información definida en la función reportableClassDecorator

// Pero eso no significa que haya perdido la propiedad miPropiedad o el método imprimir(). 
// Podemos ver que lo seguimos teniendo si instanciamos la clase:
const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);
miClase.imprimir();
