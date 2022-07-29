const a = 1;
const b = 2;
const c = 3;
const d = 4;

function sum(a, b) {
  console.log("Suma de a + b", a + b);
}
sum(c, d); // Devuelve 3

const sumWithArrowFunction = (a, b) => {
  return a + b;
};
console.log("Suma con arrow function", sumWithArrowFunction(a, b));

const sumImplicit = (c, d) => c + d;

console.log("Suma implicita", sumImplicit(c, d));

/* ************************************************************* */

// Array con objetos de ejemplo

const users = [
  {
    userName: "Fabi",
    userLastName: "Tureo",
  },
  {
    userName: "Melina",
    userLastName: "Lencinas",
  },
  {
    userName: "Guillermo",
    userLastName: "Scharf",
  },
  {
    userName: "Emi",
    userLastName: "Salias",
  },
];

/* Con un for */
const usersNames = [];

for (let i = 0; i < users.length; i++) {
  usersNames.push(users[i].userName);
}
console.log("Array de Nombres con for", usersNames);
// Devuelve: Array de Nombres con for
// [ 'Fabi', 'Melina', 'Guillermo', 'Emi' ] 


/* Con un map */
const usersNamesMap = users.map((user) => {
  return user.userName;
});
console.log("Username con map", usersNamesMap);
//Devuelve: Username con map 
//[ 'Fabi', 'Melina', 'Guillermo', 'Emi' ] 

/* ********** */
const usersNamesMapImplicit = users.map((user) => user.userName);
console.log("Implicit", usersNamesMapImplicit);

//Otro ejemplo con map devuelve array con nombre y apellido del objeto
const usersLastNames = users.map(
  (user) => `${user.userName} ${user.userLastName}`
  );
console.log("Users", usersLastNames);
//Devuelve:Users ['Fabi Tureo', 'Melina Lencinas', 'Guillermo Scharf', 'Emi Salias'];

/* ************************************************** */
