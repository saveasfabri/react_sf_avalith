// Exercise for Promise with fetch() and .then()

const URL_GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/25";

fetchedPokemon = fetch(URL_GET_POKEMON);
fetchedPokemon
  .then((response) => response.json()) // Asynchronous operation
  .then((pokemon) => showPokemon(pokemon)); // Asynchronous operation

function showPokemon(pokemon) {
  console.log("Pokemon", pokemon);// devuelve el objeto de la API
  let body = ``;
  body += `
    <h1 style="font-size:1.2em">Pokemon rendering with Fetch y Then</h1>
    <div class="img-name">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <div class="name">
        <h2 style="font-size:1em">Nombre: ${pokemon.name}</h2>
        <h2 style="font-size:1em">Peso: ${pokemon.weight}kg</h2>
      </div>
    </div>
  `;
  document.getElementById("pokemon").innerHTML = body;
  // Imprimimos en el Dom dentro de un div con id="pokemon"=>(h1,h2,h3,img)
}



// Exercise for Promise with Fetch + Async/Await

const URL_GET_POKEMON2 = "https://pokeapi.co/api/v2/pokemon/6";

const fetchedPokemonAsyncAwait = async () => {
  const pokemon = await fetch(URL_GET_POKEMON2); // 2s
  const pokemonJson = await pokemon.json(); // Execution time
  showDataWithAsyncAwait(pokemonJson);

  console.log("Pokemon in Async Await", pokemonJson);
};
fetchedPokemonAsyncAwait();

const showDataWithAsyncAwait = async (pokemon) => {
  console.log("Pokemon in Async Await", pokemon);
  let body = ``;
  body += `
    <h1 style="font-size:1.2em">Pokemon rendering with Async/Await</h1>
    <div class="img-name">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <div class="name">
        <h2 style="font-size:1em">Nombre: ${pokemon.name}</h2>
        <h2 style="font-size:1em">Peso: ${pokemon.weight}kg</h2>
      </div>
    </div>
  `;
  document.getElementById("pokemon-async-await").innerHTML = body;
};

// Exercise for Promise with Fetch + Axios


const URL_GET_POKEMON3 = "https://pokeapi.co/api/v2/pokemon/7";

const fetchedPokemonWithAxios = axios.get(URL_GET_POKEMON3);
const responseAPIAxios = fetchedPokemonWithAxios.then((response) => {
  console.log("Pokemon in Axios", response.data);
  /* Aquí agregamos.data ya que Axios generalmente (no siempre, depende de 
    cada API) accede a los datos a travez de ésta key. */

  const { name, weight, sprites } = response.data; //Aquí usamos destructuring
  let body = ``;
  //Y también va a cambiar la la forma de declarar la variables con las que
  // invocamos name, wheght y sprites, con response.data 
  body += `
    <h1 style="font-size:1.2em">Pokemon rendering with Axios & Then</h1>
    <div class="img-name">
      <img src="${response.data.sprites.front_default}" alt="${pokemon.name}">
      <div class="name">
        <h2 style="font-size:1em">Nombre: ${response.data.name}</h2>
        <h2 style="font-size:1em">Peso: ${response.data.weight}kg</h2>
      </div>
    </div>
  `;
  document.getElementById("pokemon-axios").innerHTML = body;
});
