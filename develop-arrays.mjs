import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'; // API donde vamos a traer los datos.

fetch(`${API}/products`)
.then((response)=> response.json())
.then((products) => {
console.log(products[1]);
products.forEach( Object=> console.log(Object.id * 2))
    return fetch(`${API}/products/${products[1].id}`)
})
.then((response)=> response.json())
.then(item => {
    console.log(item.id)
})
.catch((error)=> console.log(`there's a error like ${error}`));

