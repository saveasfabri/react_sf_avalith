/* setTimeout(function () {
    console.log("Hello in 2 seconds");
}, 2000); 
//Devuelve: "Hello in 2 seconds"
// Se muestra en consola a los 2 segundos.

setTimeout(() => {
    console.log("Hello in 5 seconds");
}, 5000);
//Devuelve: "Hello in 5 seconds"
// Se muestra en consola 5 seg. despues de la fx anterior
 */

//Ejemplo con console.log()

/* setTimeout(function () {
  console.log("First console.log()");
  setTimeout(function () {
    console.log("Second console.log()");
    setTimeout(function () {
      console.log("Third console.log()");
    }, 3000);
  }, 1000);
}, 5000); */
/* Devuelve:
    1°: console.log("First console.log()") a los 5 seg.
    2°: console.log("Second console.log()") 1 seg despues de First
    3°: console.log("Third console.log()") 3 seg. despues de Second
*/

// Ejercicio console.log() con3 Arrow Function

/* setTimeout(() => {
    console.log("First");
    setTimeout(() => {
        console.log("Second");
        setTimeout(() => {
            console.log("Third");
        }, 3000);
    }, 1000);
}, 5000); */
//Mismo resultado anterior pero con arrow function

// Exercise Asynchronism

/* console.log("1");
setTimeout(function () {
    console.log("2");
}, 3000);
console.log("3");
setTimeout(function () {
    console.log("4");
}, 1000);
//Devuelve:
  //1°: 1
  //2°: 3
  //3°: 4
  //4°: 2
 */

  
// Exercise for Call Stack

function installSoftware(software) {
    console.log("Installing Software " + software);
}

function customizeEditor(numberExtensions) {
    if (numberExtensions <= 0) return;
    console.log(`Installing ${numberExtensions} extensions for VSC`);
}


function readyForProgramming() {
    console.log("Environment ready for begin to Programming");
}

function prepareEnvironment() {
    installSoftware("Git");
    installSoftware("Visual Studio Code");
    installSoftware("Node.js");
    customizeEditor(5);
    readyForProgramming();
}
prepareEnvironment();
//Devuelve:
  //Installing Software Git;
  //Installing Software Visual Studio Code;
  //Installing Software Node.js;
  //Installing Software 5 extensions for VSC;
  //Environment ready for begin to Programming;
