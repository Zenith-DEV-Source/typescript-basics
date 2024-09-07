
/*--------------------------------------------------------------------------------------------------------------------------------------------\
| /!\ IMPORTANTE: Para poder ejecutar el código en entorno de node, debemos instalar ts-node primero, además de obviamente *TypeScript. /!\   |
|     RECOMIENDO QUE SE INSTALE DESDE TERMINAL RAÍZ DE TU PC CON LOS SIGUIENTES COMANDOS:                                                     |
|  _________________________________________                                                                                                  |
| º ≥ TYPESCRIPT: npm install -g typescript º                                                                                                 |
| º · · · · · · · · · · · · · · · · · · · · º                                                                                                 |
| º ≥ TS-NODE: npm install -g ts-node       º                                                                                                 |
| º---------------------------------------- º                                                                                                 |
| // PARA PODER VER LOS LOGS EN LA TERMINAL DE TU EDITOR:                                                                                     |
|     * 1 - Accede a la ruta del archivo: `cd ./src/types + first-exercises/[ejercicio]`                                                                        |
|     * 1 - Ejecuta el comando `ts-node [ejercicio]`                                                                                          |
| º---------------------------------------- º                                                                                                 |
\____________________________________________________________________________________________________________________________________________*/

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

