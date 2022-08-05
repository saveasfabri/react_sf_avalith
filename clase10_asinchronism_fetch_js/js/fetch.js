console.log("Fetch");

// Fetch con .then()
// Fetch con async/await
// Axios async/await
// Promise

/* ************************************************************* */
const URL_USERS = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS) // Infiere en que el pedido es un GET
    .then((response) => response.json())
    .then((data) => showData(data)); //Nested Promises

// Con un for

// Usamos como parametro data (trae el json Api)
function showData(data) {
    console.log("Data", data); // Desglosamos data y extraemos los 
    let body = ``;             // datos con un for y guardamos en body
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        body += `
            <p> - ${data[i].name}</p>
        `;
    }
    document.getElementById("fetch-petition").innerHTML = body;
    //Con document.getElementById("id"), apuntamos al id con el nombre
    //que asignamos en el html y con innerHTML imprimimos lo almacenado,
    //en este caso, en la variable body
};

/* *************************************************************** */

/* Con map */

/* const url_users = "https://jsonplaceholder.typicode.com/users";
fetch(url_users) // Infiere en que el pedido es un GET
    .then((response) => response.json())
    .then((data) => showdata(data)); //Nested promises

// paint the data in the dom with "map" and arrow function format
const showdata = (data) => {
    console.log("data", data);
    let body = ``;
    data.map((user) => {
        return (body += `
                <p> - username: ${user.name}</p>
            `);
    });
    document.getElementById("fetch-petition").innerhtml = body;
};
 */
