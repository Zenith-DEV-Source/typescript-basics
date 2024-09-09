/**
 * Los bucles o loops, nos permiten repetir cierta secuencia de datos dentro del flujo, dependiendo de ciertos aspectos.
 * **/

// for:

let result = [];

for (let i = 0; i <= 100; i++) {
    result.push(i)
}

console.log(result); // output: [0 ... 100]; 'node loop.js';

/**
 * Como podéis observar, el bucle for nos permite a partir de, un inicializador (let i = 0), condición del bucle (i <= 100) y un iterador (i++ // es lo mismo que i + 1),
 * crear un bucle que genere una secuencia de númeris del 1 al 100.
 * **/

let count = 0;

while (count <= 100) {
    console.log(count++); // output: 0 - 100;
}

/**
 * Si entendéis un poco de ingés, no es muy difícil entender el funcionamiento de este bucle.
 * Declaramos variable y le asignamos nuestro punto de partida (count = 0).
 * Le decimos al programa que, mientras count sea menor o igual a 100, vaya sumándole uno a dicha
 * variable (i++)
 * **/

// do - while:

do {
    console.log(count);
    count++;
}
while (count <= 100);

// Similar a while, pero garantiza que el código se ejecute al menos una vez antes de evaluar la condición.

/**
 * Estos són los típos de bucles más básicos.
 *
 *
 * **/