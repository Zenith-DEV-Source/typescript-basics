import './style.css';
import {PokeWebServices} from "./services/poke-web.services.ts";
import {PokeWebApp} from "./components/poke-web-app.ts";

// Llamámos a los métodos de la clase correspondientes para acceder a los eventos del observable y observador.
// IMPORTANTE! Debemos asignarle la instancia la cual lleve asignada el servicio, como argumento de la otra.

const data = new PokeWebServices();
const app = new PokeWebApp(data);

// Asignamos un id al botón que hemos declarado en la plantilla, para escuchar eventos.

document.getElementById('app')!.innerHTML = `
  <div>
        <button id="pokeData">Check Out Console!</button>
  </div>
`

// Declaramos el eventListener.

/*
 "!": Debemos de añadir la exxclamación antes del addEventListener para decilre a TypeScript que estamos seguros
 que el elemento el cual estamos declarando en el metodo get...Id, existe, ya que como lo estamos inyectando y no está
 previamente declarado en la plantilla, TypeScript no lo detectará y nos saltará el error que es posssibly null.
 Este operador se llama non-null assertion.
*/

document.getElementById("pokeData")!.addEventListener('click', () => {

    // Condicionamos al observador para que, si ya se ha suscrito, cancele dicha suscripción o en caso negativo,
    // se suscriba. Como hemos comentado esto es buena praxis para liberar memoria dentro de nuestros proyectos.

    return app.are_subscribed === false ? app.fetchPokemon(56) : app.cancelSubscription();

});
