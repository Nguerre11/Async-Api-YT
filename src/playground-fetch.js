import fetch from "node-fetch"; 
const API = 'https://jsonplaceholder.typicode.com'; // API donde vamos a traer los datos.
const ul = document.createElement('ul');
const api = document.querySelector('#api');
fetch(`${API}/users`)
.then((response)=> response.json())
.then((users) => {
    users.forEach(user => {
        let  li =document.createElement('li');
        let info =document.createTextNode(`the person's name is ${user.name}`);
        li.appendChild(info);
        ul.appendChild(li);
    });
    api.appendChild(ul); 

})
.catch((error)=> console.log(`there's a error like ${error}`));
