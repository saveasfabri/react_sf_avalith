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

// Formulario de Contacto
// Recibir el nombre del usuario, el correo electrónico y un campo para el comentario que quiere enviar

// La página principal debe contener tres botones:
// Uno que me lleve al formulario
// Uno que me lleve a la tabla de usuarios
// Uno que me lleve a las cards.

// Nombre, Id, email, teléfono, ciudad del usuario. nombre de la compañía.
// Renderizado de la petición a la Rick & Morty API

// // Código que se corta en la tercera línea
// const onIncorrectFunction = null;
// console.log("Console.log before execute function");
// onIncorrectFunction();
// console.log("Console.log after execute function");

// Código que se corta en la tercera línea
try {
    const onIncorrectFunction = null;
    console.log("Console.log before execute function");
    onIncorrectFunction();
    console.log("Console.log after execute function");
} catch (error) {
    console.log("Error", error);
    console.log("Console.log in catch");
    console.log("Error Name", error.name);
    console.log("Error Message", error.message);
}
console.log("Console.log after try-catch");

const getNumberPokemon = prompt("Ingrese el número de pokemon");
const URL_GET_POKEMON = `https://pokeapi.co/api/v2/pokemon/${getNumberPokemon}`;

const getPokemon = async () => {
    try {
        if (getNumberPokemon > 25)
            throw new SyntaxError("El número debe ser menor a 25");
        const pokemon = await axios.get(URL_GET_POKEMON);
        console.log("Pokemon", pokemon.data);
        console.log("Last line in try");
    } catch (error) {
        console.log("Error", error);
        console.log("Error Name", error.name);
        alert("No existen registros mayores a 25");
    }
};
getPokemon();