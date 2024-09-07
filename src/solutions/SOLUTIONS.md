## A-TYPES-functions:

````typescript

interface ProjectKnowledge {
    name: string;
    lastName: string;
    technologies: string[];
    greetingMessage: (greeting: string) => void;
}

const projectKnowledge = {

     name: 'Gerard',
     lastName: 'de Tena – Guillén Morón',
     technologies: ['JavaScript', 'TypeScript', 'React', 'Next', 'Angular', 'Python', 'Java', 'MySQL', 'FireBase', 'GC', 'MDB'],
     greetingMessage(greeting) {
         console.log(
             `${greeting}!\n
              My name is ${this.name} ${this.lastName},
              I’ve comprehensive knowledge on the following techs: \n
              ${this.technologies.join(' \n' + ',')}
              `
         );
     }
 }



````



## A-TYPES-practice-lesson:

````typescript
 const conditions = (number: number): string | number => {
         if (number % 15 === 0) return 'Fizz-Buzz';
         else if (number % 5 === 0) return 'Buzz';
         else if (number % 3 === 0) return 'Fizz';
         return number;
     };

 const sequence = (seq: number): (string | number)[] => {
     return Array.from({ length: seq }, (_, i) => conditions(i + 1));
 };

 let output = sequence(100).join(', ').toUpperCase()
 console.log(output);

````





## B-POO-1-intro:

````typescript

class Animal<T> {
    specie: string;
    habitat: string;
    additionalInfo: T;

    constructor(specie: string, habitat: string, additionalInfo: T) {
        this.specie = specie;
        this.habitat = habitat;
        this.additionalInfo = additionalInfo;
    }

}

class Snake extends Animal<SnakeInfo> {
    constructor(specie: string, habitat: string, subSpecie: string, size: number) {
        super(specie.toUpperCase(), habitat.toUpperCase(), { subSpecie, size });
    }


    description() {
        const specie = ` ${this.additionalInfo.subSpecie.toUpperCase()} - Specie: ${this.specie} -.\n`;
        const habitat = `Lives in the ${this.habitat}.\n`;
        const size = `Measures ${this.additionalInfo.size} m.`;
        console.log(`${specie} ${habitat} ${size}`);
    }
}

interface SnakeInfo {
    subSpecie: string;
    size: number;
}


const cottonmouth = new Snake('Reptile', 'Humid & aquatic areas', 'Cottonmouth', 5);
cottonmouth.description();
````
