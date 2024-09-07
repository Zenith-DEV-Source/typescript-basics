/**-------------------------------------------------------------------------------------------
 *  ES IMPORTANTE ANTES DE EMPEZAR ESTA SECCIÓN, TENER BIEN AFIANZADO EL CONCEPTO DE POO EN JAVASCRIPT.
 *
 *  > 1. Tipos dentro de las clases.
 *  > 2. Tipado
 *  > 3. Herencia.
 *  > 4. Modificadores
 *
 *  ==> CADA ARCHIVO CONTIENE LA TEORIA Y EJERCICIOS DEL TEMA CORRESPONDIENTE.
 *
 * --------------------------------------------------------------------------------------------**/


// 1. Tipos dentro de las clases.

/*
* En esta sección no nos detendremos mucho ya que los tipos los vimos en la sección anterior.
* Aún así refrescaremos, en ciertas ocasiones, con las interfaces, conceptos para poder relacionar bien los
* conceptos.
* */

class Human<T> {

    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    greetings(greeting: string) {
        console.log(`${greeting}! My name is ${this.name} ${this.lastName}, I'm ${this.age} years old.`);
    }
}


/**

 En el ejemplo anterior tenemos la declaración de los valores que contienen, en este caso, la superclase Human.
 Como podemos ver, los tipos de dicha clase, se declaran como variables globales en el archivo principal.

 En el constructor, declaramos los atributos que tendra nuestra clase y le asignamos un valor por defecto,
 en este caso, el valor de name, lastName y age (RECORDAD QUE SON VARIABLES GLOBALES DENTRO DE NUESTRA CLASE).

**/



// 2. Tipado.

 /**
  *
  * ¿Véis algo distinto en la forma que asignamos el tipo a las clases?
  * ¡Exacto! No usamos la sintáxis de los dos puntos, sino que lo hacemos con los
  * TIPOS GENÉRICOS.
  *
  * ¿Porqué? Las clases, no dejan de ser una plantilla formada a partir de objetos,
  * que nos permiten adaptar el contenido a distintos contextos.
  *
  * Entonces tenemos que trabajar con tipos que se adapten a dicha flexibilidad.
  * Los TIPOS GENÉRICOS nos dan la ventaja de no tener que declarar un tipo específico a la clase
  * base de nuestro proyecto.
  *
  * Por eso, el tipo de nuestra superclase es una simple T entre simbolos mayor-menor, como si de un
  * HTML Tag se tratase.
  *
  * Ahora declararemos la interfaz y veremos ene l siguiente concepto, como de potente es
  * esta forma de asignar tipos, ya que no solo se ciñe a las clases, podemos extrapolarlo
  * a funciones, variables, ... .
  *
  * **/


interface HumanInterface {

    name: string;
    lastName: string;
    age: number;

    greetings(greeting: string): void;
}


// 3. Herencia.

/*
 * Antes de seguir con la herencia, 
 *
 *
*/

class Man extends  Human<HumanInterface> {

    constructor(name = 'Juan', lastName = 'Moron', age = 68) {
        super(name, lastName, age);
    }

}

const juan = new Man();
juan.greetings('Hello');

class Woman extends Human<HumanInterface> {
    constructor(name = 'Anna', lastName = 'Moron', age = 61) {
        super(name, lastName, age);
    }
}

const anna = new Woman();
anna.greetings('Hola');

// Como podéis ver, tenemos una clase base que maneja todos los atributos y metodos que tendra nuestra clase Man o Woman.
// Eso se llama herencia e implica la utilización de los métodos de la superclase (clase padre), pudiendo tener un código
// más limpio y reultilizable.