
/*
    ===== Código de TypeScript =====
*/

/**
 * Función clásica
 * @param a 
 * @param b 
 * @returns 
 */
function sumar(a: number, b: number): number
{
    return a + b;
}

/**
 * Función de flecha
 * @param a 
 * @param b 
 * @returns 
 */
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

/**
 * Función con parametros opcionales
 * APUNTE: los parámetros opcionales siempre deben de ir los últimos, si los intercalamos nos va a dar un error 
 * (salvo que les demos un valor por defecto que entonces sí pueden ir intercalados)
 * 
 * @param numero 
 * @param otroNumero 
 * @param base 
 * @returns 
 */ 
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number
{
    return numero * base;
}

// console.log(sumar(3, 5));
// console.log(multiplicar(3, 5));


/**
 * Función con objetos como parámetros
 * Si hace un return es de tipo void
 * @param personaje 
 * @param puntosACurar 
 */
function curar(personaje: PersonajeGOT, puntosVidaACurar: number): void
{
    personaje.vida += puntosVidaACurar;
}

interface PersonajeGOT {
    nombre: string;
    vida: number;
    mostrarVida: () => void;    // Así definimos una propiedad que va a ser de tipo función
}

const miPersonaje: PersonajeGOT = {
    nombre: "Jon Snow",
    vida: 85,
    mostrarVida() {
        console.log('Puntos de vida:', this.vida);
    }
}

curar(miPersonaje, 15);

miPersonaje.mostrarVida();


