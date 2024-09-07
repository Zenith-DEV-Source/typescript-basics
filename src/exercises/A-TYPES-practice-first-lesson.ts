/**
 *
 *  EJERCICIOS PRÁCTICA:
 * En los siguientes ejercicios, aplicaremos varios conceptos de JavaScript
 * para darles la vuelta, y transformarlos a Typescript
 *
 **/


// 1. FIZZ_BUZZ FIXES: En las siguientes funciones que, en conjunto, devuelven el típico ejercicio de
// fizz-buzz, hay varios errores. Arréglalos:
    // ** En este ejercicio, recomiendo declarar los tipos en las mismas estructuras (argumentos y retornos de ambas funciones).
    // ** El resultado debe, SIN TOCAR LOS RETORNOS DE LA ESTRUCTURA CONDICIONAL, retornar los strings en mayúscula.
    // PISTAS: Recuerda los String.prototype para modificar dichos datos.

const conditions = (number) => {
        if (number % 15 === 0) return 'Fizz-Buzz';
        else if (number % 5 === 0) return 'Buzz';
        else if (number % 3 === 0) return 'Fizz';
        return number;
    };

const sequence = (seq) => {
    return Array.from({ length: seq }, (_, i) => conditions(i + 1));
};



console.log(sequence(100));


