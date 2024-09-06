/*
 >>> Vamos a ver la forma de declarar funciones y,
     al mismo tiempo, asignarle el tipo que esperamos como resultado.
     Aquí realmente, es cuando empezamos a ver el verdadero poder TypeScript.
 */


/**
 ***********************************************************************
 | REQUISITOS MÍNIMOS PARA SEGUIR ESTE CURSO:                           |
 |                                                                      |
 |  ≥ Saber declarar funciones tanto declarativas como expresivas.      |
 |  ≥ Haber seguido hasta aquí paso a paso el resto de los docs.        |
 |  ≥ Entender como funcionan los métodos de Objetos y Arreglos en JS.  |
 |  ≥ Sintaxis ES6.                                                     |
 ***********************************************************************
 **/


const greetings = (greeting: string, name: string): string => `${greeting}, ${name}\n`;

function logFunction(functionToLog: string): void {
    console.log(`${functionToLog}`);
}

//------------------------------------------------------------------------------------------
// Asignamos el respectivo tipo a los argumentos y, asimismo, el retorno de la función:     |
//                                                                                          |
// Se declara seguido de los parámetros ≥ (): [tipo del retorno] => {retorno}               |
//                                                                                          |
//                                                                                          |
// [void]: Declaramos que dicha función no tiene nada que vaya a retornar.                  |
//                                                                                          |
//------------------------------------------------------------------------------------------


logFunction(greetings('Buenos días!', 'Gerard'));

/*___________________________________________________________________________
*                                                                              |
* ¡Pero eso no es el final! Podemos hacer maravillas con las interfaces y      |
* la declaración de tipos de nuestras funciones.                               |
*                                                                              |
* A continuación vamos a ver un pequeño ejercicio para que hagáis un poco de   |
* investigación por vuestra cuenta. Pido que si no sabéis nada de TypeScript   |
* y estáis siguiendo al pie de la letra este mini curso, BUSCA POR FAVOR.      |
*                                                                              |
* Esto está para que APRENDAS, ChatGPT es un recurso muy tentador, pero si     |
* de verdad buscas progreso, házte el favor y no caigas en ese bucle de la     |
* aparente facilidad.                                                          |
*                                                                              |
* Hay mil plataformas como StacKOverFlow, la propia documentación de TS,       |
* www3.schools.com, investiga. Mi mentor me dijo una frase muy cierta la cual  |
* afiancé al máximo: Un dev el 80% INVESTIGADOR, 20% escritor de código.       |
*——--—---------------------------------------------------------------
*/

// EJERCICIO_1: ¿Cómo declaras en una interfaz, el tipo de una función dentro de un objeto?

const projectKnowledge = {

    name: 'Gerard',
    lastName: 'de Tena - Guillén Morón',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next', 'Angular', 'Python', 'Java', 'MySQL', 'FireBase', 'GC', 'MDB'],
    greetingMessage(greeting) {
        console.log(
            `${greeting}!\n
             My name is ${this.name} ${this.lastName},
             I've a comprehensive knowledge on the following techs: \n
             ${this.technologies.join(' \n' + ',')}
             `
        );
    }
}

/**
 * 1.1 Dada la siguiente interfaz, establece el tipo correspondiente del objeto anterior.
 *
 * 1.2 Puedes establecer el tipo de los argumentos de la función en el mismo objeto aunque,
 *     te recomiendo que lo hagas en su totalidad desde dicha interfaz.
 * **/


interface ProjectKnowledge {
    // declarar aquí los tipos.
}
