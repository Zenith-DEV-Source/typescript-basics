import {PokeWebServices} from "../services/poke-web.services.ts";
import {Subscription} from "rxjs";

export class PokeWebApp {


    private pokeList!: Subscription;
    public are_subscribed: boolean = false
    constructor(private service: PokeWebServices) {}

    /*
     * Establecer como privado los valores y métodos de nuestras clases, nos permite bloquear el acceso a dichos datos desdel lado del cliente.
     * Es una forma de protegernos contra las inyecciones de datos no deseadas y la manipulación de cualquier persona que no forme parte del equipo.
    */

    fetchPokemon(id: number): void {

        /** SUBSCRIBE: Aquí es dónde se encuentran los OBSERVADORES. Estos se suscriben para recibir los eventos emitidos por parte de los observables.
        // Para poder desempeñar dichas funcionalidades, debemos llamar al metodo subscribe, el cual en nuestro caso consta de dos argumentos:
        // [next:] => datos que va a recibir && [error:] => manejo de errores.
        **/

        this.pokeList = this.service.getPokeData(id).subscribe({
            next: data => {
                console.log(data);
                this.are_subscribed = true;
            },
            error: err => console.error(`Error fetching data: ${err}`)
        })
    }

    cancelSubscription(): void {

        // Esta función simplemente sirve para liberar la memoria en componentes con un ciclo de vida duradero una vez finalizado su uso.

        if (this.pokeList) {
            this.pokeList.unsubscribe();
            this.are_subscribed = false;
        }
    }
}
