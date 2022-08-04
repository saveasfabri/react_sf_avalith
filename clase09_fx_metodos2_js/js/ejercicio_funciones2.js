
/* Filter */

const arrayNumbersStrings = [ 1, 2, "1", "2", "uno", "dos"];

const filterNumbersAndStrings = arrayNumbersStrings.filter(number => number == 1);
console.log(filterNumbersAndStrings); //Ejemplo con doble igual..............↑
//Devuelve: [ 1, '1' ]


const filterOnlyNumbers = arrayNumbersStrings.filter(number=> number === 1);
console.log(filterOnlyNumbers); //Ejemplo con triple igual............↑
//Devuelve: [ 1 ]


const differentFromOne= arrayNumbersStrings.filter(number => number != 1);
console.log(differentFromOne); //Ejemplo con doble igual.............↑
//Devuelve: [ 2, '2', 'uno', 'dos' ]


const differentFromOne2 = arrayNumbersStrings.filter(number => number !== 1);
console.log(differentFromOne2); //Ejemplo con triple igual................↑
//Devuelve: [ 2, '1', '2', 'uno', 'dos' ]

/* ************************************** */


const users = [
  {
    id:1,
    userName: "Fabi",
    userLastname: "Tureo"
  },
  {
    id:2,
    userName: "Melina",
    userLastname: "Lencinas"
  },
  {
    id: 3,
    userName: "Guillermo",
    userLastName: "Scharf"
  },
  {
    id: 4,
    userName: "Emi",
    userLastName: "Salias"
  }
];

//Nuevo array de usuarios con ID menor a 3 con Filter

const userLessThanThree = users.filter((user) => user.id < 3);
console.log("Filtrados ID menor a 3", userLessThanThree);
//Devuelve:
/* Filtrados ID menor a 3 
[ 
  { id: 1, userName: 'Fabi', userLastname: 'Tureo' }, 
  { id: 2, userName: 'Melina', userLastname: 'Lencinas' } 
]  */

/* Nuevo array de usuarios con nombre Guillermo con Filter*/

const obtainUser = users.filter((user) => user.userName === "Guillermo");
console.log("Obtener usuarios Guillermo", obtainUser);
//Devuelve:
/* Obtener usuarios Guillermo 
[ 
  { id: 3, userName: 'Guillermo', userLastName: 'Scharf' }
] */

// Como filter es case sensitive, usamos toLowerCase() para pasar a minuscula
// todos los userName del del array original y pedimos en minúscula "guillermo"

const obtainUser2 = users.filter((user) => user.userName.toLowerCase() === "guillermo");
console.log("Obtener usuarios Guillermo", obtainUser2);
//Devuelve: 
/* Obtener usuarios Guillermo 
[ { id: 3, userName: 'Guillermo', userLastName: 'Scharf' } ]  */

//Tambien toTpperCase() para hacerlo con mayuscula y lo pedimos con "GUILLERMO"

const obtainUser3 = users.filter((user) => user.userName.toUpperCase() === "GUILLERMO");
console.log("Obtener usuarios Guillermo", obtainUser3);
//Devuelve: 
/* Obtener usuarios Guillermo
 [ { id: 3, userName: 'Guillermo', userLastName: 'Scharf' } ] */

/* ****************************** */

/* Map + Filter */

const gameList = [
  {
    title: "Wonder Boy",
    palataform: "PS2",
    price: 79,
  },
  {
    title: "Snow Bros",
    palataform: "Mega Drive",
    price: 59,
  },
  {
    title: "Bubble Bobble",
    palataform: "Family Game",
    price: 20,
  },
]

/* Creamos un nuevo array, solo con los "titulos" de los juegos del array
 original través de map */

const gameTitles = gameList.map((game)=> game.title);
console.log("Game titles", gameTitles);
//Devuelve: 
//Game titles [ 'Wonder Boy', 'Snow Bros', 'Bubble Bobble' ] 

/* Creamos un nuevo array, con los "objetos" de los juegos con precio mayor
a 60 del array original través de filter */

const gamePrices = gameList.filter((game) => game.price > 60);
console.log("Game Prices", gamePrices);
//Devuelve: 
//Game Prices [ { title: 'Wonder Boy', palataform: 'PS2', price: 79 } ] 

/* Creamos un nuevo array, solo con los "titulos" de los juegos con precio
mayor a 60 del array original través de filter + map */

const gamesForBuy = gameList
  .filter((game) => game.price > 60)
  .map((game)=> game.title);

console.log("Games for Buy", gamesForBuy)
//Devuelve: 
//Games for Buy [ 'Wonder Boy' ] 

/* ********************** */

/* Find */

const gameList2 = [
  {
    id:1,
    title: "Wonder Boy",
    palataform: "PS2",
    price: 79,
  },
  {
    id:2,
    title: "Snow Bros",
    palataform: "Mega Drive",
    price: 59,
  },
  {
    id:3,
    title: "Shinobi",
    palataform: "Game Boy",
    price: 20,
  },
  {
    id:4,
    title: "Bubble Bobble",
    palataform: "Mega Drive",
    price: 179,
  },
]

/* Devuelve solo los "objetos" que tengan como titulo "BUBBLE BOBBLE" */

const obtainReturnal = gameList2.find((game) => game.title.toUpperCase() === "BUBBLE BOBBLE");
console.log("Obtain Returnal", obtainReturnal);
// Devuelve:
/*Obtain Returnal 
{ 
  id: 4, 
  title: 'Bubble bobble', 
  palataform: 'Mega Drive', 
  price: 179 
}   */

/* ************************* */

/* Destructuring */

/* En versiones anteriores de JS, para obtener los valores de de una determinada 
posicion de un array y guardarlo en una variable se debía ejecutar uno por uno. */

const names = ["Fabi", " Melina", "Guillermo", "Emi"];

const firstPosition = names[0];
const secondPosition = names[1];
const thirdPosition = names[2];
const fourthPosition = names[3];

/* console.log("First position:", firstPosition);
//Devuelve: First position: Fabi

console.log("Second position:", secondPosition);
//Devuelve: Second position: Melina

console.log("Third position:", thirdPosition);
//Devuelve: Third position: Guillermo

console.log("Fourth position", fourthPosition);
//Devuelve: Fourth position: Emi */


/* A partir de ECMAScript 6 podemos hacerlo con Destructuring */

const names2 = ["Fabi", " Melina", "Guillermo", "Emi"];

const firstPosition2 = names2[0];
const secondPosition2 = names2[1];
const thirdPosition2 = names2[2];
const fourthPosition2 = names2[3];

const [first, second, third, fourth] = names2;
/* Las nuevas variables se asignan por oden de declaracion. 
Por ejemplo first=> "Fabi", second=> "Melina...etc"*/

console.log("First position:", first);
//Devuelve: First position: Fabi

console.log("Second position:", second);
//Devuelve: Second position: Melina

console.log("Third position:", third);
//Devuelve: Third position: Guillermo

console.log("Fourth position", fourth);
//Devuelve: Fourth position: Emi


/* Otro ejemplo con un objeto de destructuring */

const userGuille = {
  id: 3,
  userName: "Guillermo",
  userLastName: "Scharf"
};

const idDestructuring = userGuille.id;
const userNameDestructuring = userGuille.userName;
const userLastNameDestructuring = userGuille.userLastName;

console.log("Id:", idDestructuring);
//Devuelve: id: 3
console.log("User name:", userNameDestructuring);
//Devuelve: User name: Guillermo
console.log("User last name", userLastNameDestructuring);
//Devuelve: User last name:  Scharf 

/* Aquí, si lo necesitamos, podriamos cambiar el nombre de
la propiedad. en este ejemplo id lo reemplazamos por idUser */
const { id:idUser, userName, userLastName} = userGuille;
//↑ Asi queda userGuille luego del Destructuring

console.log("idUser:", idUser);
//Devuelve: idUder: 3

console.log("User name:", userName);
//Devuelve: User name: Guillermo

console.log("User last name: ", userLastName);
// Devuelve: User Last name: Scharf

/* Y luego, por ejemplo, podemos usarlo en una fuction
  de 3 formas diferentes*/

function getUser(user) {
  return `${user.userName} ${user.userLastName}`;
};
console.log(getUser(userGuille));
//Devuelve: Guillermo Scharf

function getUserDestructuring2(user) {
  const { userName, userLastName } = user;
  return `${userName} ${userLastName}`;
};
console.log(getUserDestructuring2(userGuille));
//Devuelve: Guillermo Scharf

function getUserDestructuring( { userName, userLastName} ) {
  return `${userName} ${userLastName}`;
};
console.log(getUserDestructuring(userGuille));
//Devuelve: Guillermo Scharf

/* ******************* */

//Concatenamos 3 arrays con .concat()

const names3 = ["Fabi", "Melina", "Guillermo", "Emi"];
const otherNames = ["Sofía", "Fabricio", "Deborah", "Nacho"];
const otherNamesAgain = ["Paloma", "Fernando", "Celeste", "Javier"];

const totalNames = names.concat(otherNames, otherNamesAgain);
console.log("Total Names",totalNames);
//Debuelve:
/*  Total Names [ 'Fabi',' Melina','Guillermo','Emi','Sofía','Fabricio', 
  'Deborah','Nacho','Paloma','Fernando','Celeste','Javier' ] 
 */

  
// Pero cuando tenemos objetos o arrays muy grandes usaremos Spread Operator

const totalNamesSpread = [...names, ...otherNames, ...otherNamesAgain];
console.log(totalNamesSpread);
//Debuelve:
/*[ 'Fabi',' Melina','Guillermo','Emi','Sofía','Fabricio', 
  'Deborah','Nacho','Paloma','Fernando','Celeste','Javier' ] 
 */




