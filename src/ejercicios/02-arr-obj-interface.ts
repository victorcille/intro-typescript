
/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];

habilidades.push(true);

let lenguajes: (string)[] = ['PHP', 'TypeScript', 'JavaScript', 'Python'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);