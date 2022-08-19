
// Código que se corta en la tercera línea
/* const onIncorrectFunction = null;
console.log("Console.log before execute function");
onIncorrectFunction();
console.log("Console.log after execute function"); */
/* Devuelve: 
  Console.log before execute function 
  (El código que se corta en la tercera línea
  y no se muestra el segundo console.log)
 */


// Mismo ejemplo pero con Try Catch
/* 
try {
    const onIncorrectFunction = null;
    console.log("Console.log before execute function");
    onIncorrectFunction();
    console.log("Console.log after execute function");//No se ejecuta
} catch (error) {
    console.log("Error", error);
    // Devuelve: Error [TypeError: onIncorrectFunction is not a function] 
    console.log("Console.log in catch");
    // Devuelve: Console.log in catch
    console.log("Error Name:", error.name);
    // Devuelve: Error Name TypeError
    console.log("Error Message:", error.message);
    // Devuelve: Error Message: onIncorrectFunction is not a function 
}
console.log("Console.log after try-catch");
// Devuelve: Console.log after try-catch 
 */
/* En este ejemplo se ejecuta el try y cuando hay un error se corta el
  resto del código y continúa el catch y no se interrumpe el flujo de
  ejecución
 */


// Ejemplo de Try Catch con Axios - API Pókemon

/* const getNumberPokemon = prompt("Ingrese el número de pokemon");
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
        // Devuelve: Error [ReferenceError: axios is not defined] 
        console.log("Error Name", error.name);
        // devuelve: Error Name ReferenceError 
        alert("No existen registros mayores a 25");
    }
};
getPokemon(); */