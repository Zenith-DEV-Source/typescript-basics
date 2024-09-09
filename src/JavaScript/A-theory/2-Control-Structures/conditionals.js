/**
 * Para comprender por qué se llama estructura de control, es importante entender cómo funciona
 * la secuencia de instrucciones en nuestro código.
 * A esta secuencia, que define el orden en el que se ejecutan las instrucciones, la llamamos flujo de control.
 *
 * Generalmente, el flujo sigue un orden de arriba hacia abajo.
 * Sin embargo, en JavaScript existen ciertas particularidades, como el hoisting,
 * que es una característica del lenguaje que reubica algunos elementos en el código,
 * dándoles prioridad según lo considere necesario para su correcta ejecución.
 *
 * PARA ENTENDER BIEN ESTOS CONCEPTOS, BUSCA INFORMACIÓN EN GOOGLE, NO EN CHATGPT.
 *
 * Entonces ahora podemos deducir que el nombre de esta estructura, está directamente relacionado con
 * el concepto visto en la introducción.
 *
 * Tenemos varias formas de declararlas:
 * **/


function ableToDrive(age, is_drinking) {

    // if - else if - else:

    if (age >= 18 && !is_drinking) {
        // 1ª cumplida
        return `Puede conducir.`;
    }

    else if(age >= 18 && is_drinking) {
        // 2ª cumplida
        return `Si tu alcoholímetro supera los 0.25mg/l, no conduzcas`
    }

    else {
        // resto
        return `No puede conducir`;
    }

}


let output = ableToDrive(18, true);

console.log(output); // no puede conducir.

/**
 * Como véis, aquí estamos condicionando el flujo de nuestro programa, a tomar x o y decisión. Prueba a cambiar los valores
 * para ver como se ejecutan las codiciones. (node conditionals.js);
 **/

function totalAmount(amount, required_price) {
    // Operador ternario ( condición ?  afirmativa : negativa );

    return amount > required_price ? 'Pago aceptado' : 'Pago rechazado';

}

/**
 *  Es la forma de acortar el anterior en condiciones cortas. No es recomendable usarlas para condiciones de varios
 *  bloques.
 **/


output = totalAmount(15, 50);

console.log(output);

