
/*
    ===== Código de TypeScript =====
*/

// Para definir un genérico lo hacemos con <> y dentro una letra que queramos. El standard usado en estos casos es una T
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

// Como la función es genérica, devuelve automáticamente (implícitamente) el mismo tipo que le pasamos como argumento. 
// Si es un string un string, si es un number un number, etc
let soySring = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Pero también la ventaja que tienen los genéricos es que podemos definirle un tipo explícitamente y no se va a quejar
let soyExplicito = queTipoSoy<number>(100);