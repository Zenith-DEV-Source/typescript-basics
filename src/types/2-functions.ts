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
* ¡Pero esto no es el final! Podemos hacer maravillas con las interfaces y     |
* la declaración de tipos de nuestras funciones.                               |
*                                                                              |
* Hemos preparado un sencillo ejercicio para que trabajéis vuestros dotes de   |
* investigación. Pido que si no sabéis nada de TypeScript                      |
* y estáis siguiendo al pie de la letra este mini curso, BUSCAD EN INTERNET.   |
*                                                                              |
* Esto está para que APRENDAS, ChatGPT es un recurso muy tentador, pero si     |
* de verdad buscas progreso, házte el favor y no caigas en ese bucle de la     |
* aparente facilidad.                                                          |
*                                                                              |
* Hay mil plataformas como StacKOverFlow, la propia documentación de TS,       |
* www3.schools.com, investiga. Mi mentor me dijo una frase muy cierta la cual  |
* se convirtió en mi mantra diario:                                            |
* Un dev es 80% INVESTIGADOR, 20% Code writer.                                 |
*——--—------------------------------------------------------------------------
*/
