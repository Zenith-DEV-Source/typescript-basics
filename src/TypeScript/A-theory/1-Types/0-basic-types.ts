/*---------------------------------\
| TIPOS BÁSICOS:                   |
| * string: Cadena de carácteres;  |
| * number: Números;               |
| * boolean: Booleano (T / F);     |
| * null;                          |
| * undefined;                     |
\_________________________________*/

// EJEMPLOS:

const Name: string = 'Gerard';
let Age: number = 26;
let Gender: boolean = true;
let Relationship: undefined = undefined;

console.log(
    `Sujeto: ${Name};\n 
    Edad: ${Age} años;\n 
    Género: Masculino: ${Gender} - Femenino: ${!Gender}\n 
    Estado civil: ${Relationship}`
)

