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
import {ajax} from "rxjs/internal/ajax/ajax";
import {map, Observable} from "rxjs";
import {Ability, Pokemon} from "../interfaces";


export class PokeWebServices {


    getPokeData(id: number): Observable<Pokemon> {

        // OBSERVABLE: secuencia asíncrona de eventos que almacena y emite eventos.
        // Los observadores pueden suscribirse para recibir esos valores o eventos.

        return ajax.getJSON<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(

            // PIPE: permite encadenar operadores de modifación y filtrado aplicándolos secuencialmente
            // para modificar o procesar los valores de dichos eventos.

           map((pokemon: Pokemon) => {

               // MAP: Operador espejo de '[].map()'. Sirve para transformar los valores almacenados en nuestro Observable.

               return {
                   ...pokemon,
                   id: pokemon.id,
                   name: pokemon.name,
                   abilities: pokemon.abilities.map((ability: Ability) => ({
                       ...ability,
                       name: ability.ability.name,
                       url: ability.ability.url,
                       is_hidden: ability.is_hidden,
                       slot: ability.slot
                   })),
                   imageUrl: pokemon.sprites.front_default

                   // Conversor de tipos. Aquí lo uso de refuerzo del tipado del retorno del operador.

               } as Pokemon

           })
        );
    }
}