"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PokeWebApp = /** @class */ (function () {
    function PokeWebApp(service) {
        this.service = service;
    }
    /*
     * Establecer como privado los valores y métodos de nuestras clases, nos permite bloquear el acceso a dichos datos desdel lado del cliente.
     * Es una forma de protegernos contra las inyecciones de datos no deseadas y la manipulación de cualquier persona que no forme parte del equipo.
    */
    PokeWebApp.prototype.fetchPokemon = function () {
        /** SUBSCRIBE: Aquí es dónde se encuentran los OBSERVADORES. Estos se suscriben para recibir los eventos emitidos por parte de los observables.
        // Para poder desempeñar dichas funcionalidades, debemos llamar al metodo subscribe, el cual en nuestro caso consta de dos argumentos:
        // [next:] => datos que va a recibir && [error:] => manejo de errores.
        **/
        this.pokeList = this.service.getPokeData(23).subscribe({
            next: function (data) { return console.log(data); },
            error: function (err) { return console.error("Error fetching data: ".concat(err)); }
        });
    };
    PokeWebApp.prototype.cancelSubscription = function () {
        // Esta función simplemente sirve para liberar la memoria en componentes con un ciclo de vida duradero una vez finalizado su uso.
        if (this.pokeList) {
            this.pokeList.unsubscribe();
        }
    };
    return PokeWebApp;
}());
