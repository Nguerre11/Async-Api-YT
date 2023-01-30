const API = 'https://jsonplaceholder.typicode.com'; // API donde vamos a traer los datos.
const ul = document.createElement('ul');
const api = document.querySelector('#api');
fetch(`${API}/users`)
.then((response)=> response.json())
.then((users) => {
    console.log(users);
})
.catch((error)=> console.log(`there's a error like ${error}`));
