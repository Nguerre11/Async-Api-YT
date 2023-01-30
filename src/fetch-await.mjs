import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi)
{
    const response = await fetch(urlApi);
    const data = await response.json()
    return data;
}

async function Data(urlApi)
{
    try{
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
        products.forEach(object => {
            console.log(object.id)  
        });
        console.log(product.id);
        console.log(category.name);
    }
    catch{error => console.error(error)}
}
Data(API)


