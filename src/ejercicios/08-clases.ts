
/*
    ===== Código de TypeScript =====
*/

// En las interfaces no se tipan las propiedades ni se desarrollan los métodos, simplemente se definen pero sin llegar a desarrollarlos
interface SuperHeroe2 {
    alterEgo: string;
    edad: number;
    nombreReal: string;

    imprimirNombre: () => string;
}

// FORMA CLÁSICA DE DEFINIR UNA CLASE CON SUS MÉTODOS Y PROPIEDADES
class Heroe {
    private alterEgo: string;   // Sólo es visible dentro de esta clase
    public edad: number;        // Es visible dentro y fuera de esta clase
    private nombreReal: string;
    // static nombreReal: string;  // Puedo acceder a esta propiedad sin necesidad de crear una instancia de esta clase

    constructor(alterEgo: string, edad: number, nombreReal: string) {
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }

    imprimirNombre() {
        return `${this.alterEgo}`;
    }
}

// FORMA EQUIVALENTE (Y MÁS RÁPIDA) DE DEFINIR UNA CLASE Y SUS MÉTODOS Y PROPIEDADES
class Heroe2 {
    constructor(
        private alterEgo: string, 
        public edad: number, 
        private nombreReal: string
    ) {}
}

// HERENCIA
class PersonaNormal {
    constructor(
        private nombre: string, 
        private direccion: string
    ) {}
}

class Heroe3 extends PersonaNormal {
    constructor(
        private alterEgo: string, 
        public edad: number, 
        private nombreReal: string
    ) {
        super(nombreReal, 'NY');    // Este nombreReal hace referencia al argumento que recibe el constructor
    }
}

// No se pueden instanciar interfaces, se instancian las clases. 
const ironman = new Heroe('Iron Man', 41, 'Tony Stark');

// Lo que podemos hacer con una interfaz es tipar una variable y así onligarla a que cumpla con dicha interfaz 
const spiderman: SuperHeroe2 = {
    alterEgo: "Spider Man",
    edad: 21,
    nombreReal: "Peter Parker",

    imprimirNombre() {
        return `${this.alterEgo}`;
    }
}

console.log(ironman);
console.log(ironman.imprimirNombre());
console.log(spiderman);
console.log(spiderman.imprimirNombre());


const capi = new Heroe2('Capitán América', 35, 'Steve Rogers');
console.log(capi);

const viudaNegra = new Heroe3('Black Widow', 30, 'Natasha Romanov');
console.log(viudaNegra);


