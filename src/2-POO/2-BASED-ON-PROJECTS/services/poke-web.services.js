"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeWebServices = void 0;
/**
 * Este archivo se encarga de las llamadas http y su proceso e inyección dentro del proyecto.
 * A este tipo de archivos le llamaremos servicios.
 *
 * En este archivo incluiré los siguientes puntos:
 *
 * - Observables (RxJs)
 * - Pipes (RxJs)
 * - Métodos de la programación reactiva (RxJs)
 *
 * **/
var ajax_1 = require("rxjs/internal/ajax/ajax");
var rxjs_1 = require("rxjs");
var PokeWebServices = /** @class */ (function () {
    function PokeWebServices() {
    }
    PokeWebServices.prototype.getPokeData = function (id) {
        // OBSERVABLE: secuencia asíncrona de eventos que almacena y emite eventos.
        // Los observadores pueden suscribirse para recibir esos valores o eventos.
        return ajax_1.ajax.getJSON("https://pokeapi.co/api/v2/pokemon/".concat(id)).pipe(
        // PIPE: permite encadenar operadores de modifación y filtrado aplicándolos secuencialmente
        // para modificar o procesar los valores de dichos eventos.
        (0, rxjs_1.map)(function (pokemon) {
            // MAP: Operador espejo de '[].map()'. Sirve para transformar los valores almacenados en nuestro Observable.
            return __assign(__assign({}, pokemon), { id: pokemon.id, name: pokemon.name, abilities: pokemon.abilities.map(function (ability) { return (__assign(__assign({}, ability), { name: ability.ability.name, url: ability.ability.url, is_hidden: ability.is_hidden, slot: ability.slot })); }), imageUrl: pokemon.sprites.front_default });
        }));
    };
    return PokeWebServices;
}());
exports.PokeWebServices = PokeWebServices;
