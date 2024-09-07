// A-TYPES-functions:

/** const projectKnowledge = {
*
*     name: 'Gerard',
*     lastName: 'de Tena – Guillén Morón',
*     technologies: ['JavaScript', 'TypeScript', 'React', 'Next', 'Angular', 'Python', 'Java', 'MySQL', 'FireBase', 'GC', 'MDB'],
*     greetingMessage(greeting) {
*         console.log(
*             `${greeting}!\n
*              My name is ${this.name} ${this.lastName},
*              I’ve comprehensive knowledge on the following techs: \n
*              ${this.technologies.join(' \n' + ',')}
*              `
*         );
*     }
* }
*
* interface ProjectKnowledge {
*  name: string;
*  lastName: string;
*  technologies: string[];
*  greetingMessage(greeting: string) => void;
* }
*
**/



// A-TYPES-practice-lesson:

/**
* const conditions = (number: number): string | number => {
*         if (number % 15 === 0) return 'Fizz-Buzz';
*         else if (number % 5 === 0) return 'Buzz';
*         else if (number % 3 === 0) return 'Fizz';
*         return number;
*     };
*
* const sequence = (seq: number): (string | number)[] => {
*     return Array.from({ length: seq }, (_, i) => conditions(i + 1));
* };
*
* console.log(sequence(100).join(', ').toUpperCase());
*
**/


// B-POO-1-intro:


// class Animal<T> {
//     specie: string;
//     habitat: string;
//     additionalInfo: T;
//
//     constructor(specie: string, habitat: string, additionalInfo: T) {
//         this.specie = specie;
//         this.habitat = habitat;
//         this.additionalInfo = additionalInfo;
//     }
//
// }
//     interface SnakeInfo {
//     subSpecie: string;
//     size: number;
// }
//
// class Snake extends Animal<SnakeInfo> {
//     constructor(specie: string, habitat: string, subSpecie: string, size: number) {
//         super(specie, habitat, { subSpecie, size });
//     }
//
//
//     description() {
//         const specie = `${this.additionalInfo.subSpecie} - Specie: ${this.specie} -.\n `;
//         const habitat = `Lives in the ${this.habitat}.\n`;
//         const size = `Measures ${this.additionalInfo.size} m.`;
//         console.log(`${specie} ${habitat} ${size}`);
//     }
// }
//
//
// const cottonmouth = new Snake('Reptile', 'Humid & aquatic areas', 'Cottonmouth', 5);
// cottonmouth.description();
