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