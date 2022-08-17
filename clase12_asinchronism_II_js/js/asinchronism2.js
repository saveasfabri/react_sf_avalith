// const URL_GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/25";

// // Exercise for Promise with .then() and fetch()

// fetchedPokemon = fetch(URL_GET_POKEMON);
// fetchedPokemon
//     .then((response) => response.json()) // Asynchronous operation
//     .then((pokemon) => showPokemon(pokemon)); // Asynchronous operation

// function showPokemon(pokemon) {
//     console.log("Pokemon", pokemon);
//     let body = ``;
//     body += `

//         <h1>Pokemon rendering with Fetch y Then</h1>
//         <h2>${pokemon.name}</h2>
//         <h3>${pokemon.name} pesa: ${pokemon.weight}kg</h3>
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//     `;
//     document.getElementById("pokemon").innerHTML = body;
// }

// // Exercise for Promise with Fetch + Async/Await
// const fetchedPokemonAsyncAwait = async () => {
//     const pokemon = await fetch(URL_GET_POKEMON); // 2s
//     const pokemonJson = await pokemon.json(); // Execution time
//     showDataWithAsyncAwait(pokemonJson);

//     console.log("Pokemon in Async Await", pokemonJson);
// };
// fetchedPokemonAsyncAwait();

// const showDataWithAsyncAwait = async (pokemon) => {
//     console.log("Pokemon in Async Await", pokemon);
//     let body = ``;
//     body += `
//         <h1>Pokemon rendering with Async/Await</h1>
//         <h2>${pokemon.name}</h2>
//         <h3>${pokemon.name} pesa: ${pokemon.weight}kg</h3>
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//     `;
//     document.getElementById("pokemon-async-await").innerHTML = body;
// };

// const fetchedPokemonWithAxios = axios.get(URL_GET_POKEMON);
// const responseAPIAxios = fetchedPokemonWithAxios.then((response) => {
//     console.log("Pokemon in Axios", response.data);
//     console.log("Response", response);
//     const { name, weight, sprites } = response.data;
//     let body = ``;
//     body += `
//         <h1>Pokemon rendering with Axios & Then</h1>
//         <h2>${name}</h2>
//         <h3>${name} pesa: ${weight}kg</h3>
//         <img src="${sprites.front_default}" alt="${name}">
//     `;
//     document.getElementById("pokemon-axios").innerHTML = body;
// });
