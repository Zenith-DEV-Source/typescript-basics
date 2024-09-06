/** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** \
 *                                                            *
 *                                                            *
 *  INTERFACES: Las interfaces permiten definir               *
 *  la estructura de objetos y arrays en TypeScript,          *
 *  asegurando que sus propiedades cumplan con tipos          *
 *  específicos.                                              *
 *                                                            *
 *                                                            *
 \** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */

// Ahora veremos la forma genérica de declarar tipos en arrays de un solo type, en este caso, string:

const groupMembers: string[] = ['David', 'Juanfran', 'Judit', 'Lucía', 'Gerard'];

console.log(groupMembers);

//¿Qué ocurre si tenemos un objeto que contiene un array? ¿O incluso otro objeto como propiedad?
// Veámoslo:

const students= {
    id: 0,
    nombre: 'Pepito',
    asignaturas: ['Catalán', 'Castellano', 'Francés', 'Inglés'],
    repetidor: false,
    mejores_amigos: {
        id: 2,
        nombre: 'Pepita',
        repetidor: true
    }
}

// Ahora, como hago para asignar tipos en este caos? ¡Fácil!
// Simplemente, identificar el tipo de cada propiedad y declararlo en una interfaz como
// veremos a continuación:

export interface StudentsRelationships {
    id: number;
    nombre: string;
    repetidor: boolean;
}

export interface Student {
    id: number;
    nombre: string;
    asignaturas: string[];
    repetidor: boolean;
    mejores_amigos?: StudentsRelationships;
}


console.log(students);

/*
*
* ¿A qué os recuerda la forma en que declaramos las interfaces?
* ¡Exacto! Igualito a una clase corriente.
*
* MODIFICACIÓN:
*
* ¿Y si tenemos un array con muchos estudiantes, pero no todos cuentan con
* mejores amigos?
*
* Pues bien, en TypeScript, encontramos una propiedad muy útil que nos permite
* decirle que quizás no necesitemos ese elemento, ya que al estar declarando los
* tipos de cualquier dato que vamos a usar, es de carácter obligatorio incluirlo.
*
* Para acceder a eso que nos permite definir qué propiedades son opcionales y cuáles son requeridas,
* escribimos INTERROGANTE.
*
* El interrogante le dice a TypeScript que el elemento es possibly UNDEFINED, por lo que
* entonces TypeScript nos dará la opción de incluirlo o no.
*
* */


const Daniel: Student = {
    id: 0,
    nombre: 'David',
    asignaturas: ['Mates', 'Física'],
    repetidor: true
}

const Judit: Student = {
    id: 0,
    nombre: 'Judit',
    asignaturas:['Biología', 'Filosofía', 'Música'],
    repetidor: true,
    mejores_amigos: {
        id: 2,
        nombre: 'Joan',
        repetidor: false
    }
}

console.log(Daniel, Judit);