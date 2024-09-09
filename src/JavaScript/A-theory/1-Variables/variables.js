/**
 * Las variables en cualquier lenguaje de programación, son aquellos elementos que nos sirven para almacenar,
 * datos, estructuras ...
 *
 * En JS existen 3 formas de declarar las variables, aunque una ya esta obsoleta.
 *
 * **/

var name = 'Gerard';
let age = 26;
const NIF = 123456

// var: Nos da acceso desde cualquier estructura del proyecto, independientemente que estemos trabajando dentro de un
// scope de, por ejemplo, una función (Lo veremos más adelante). Se puede declarar de nuevo y/o modificar su contenido.

// let: El nuevo var, nos da la oportunidad de acceder a los datos de forma general, con la diferencia que no tine acceso
// a esta si, poniendo el mismo ejemplo, estamos declarando la ejecución de una función en su respectivo blockscope.
// Al igual que var podemos modificar su contenido pero no podemos declararla de nuevo.

// const: variable que, como su nombre indica, actúa como una constante en nuestro proyeccto, siendo imposible de declarar
// de nuevo y/o modificar el contenido.