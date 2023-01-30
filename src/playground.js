const API = 'https://jsonplaceholder.typicode.com'; // API donde vamos a traer los datos.
xhttp = new XMLHttpRequest(); 

function fetchData()
{
  if (this.readyState === 4 && this.status === 200 )
  {     const apis = document.querySelector('#api');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const data = JSON.parse(this.responseText); // retornamos callback null en error. Parse de datos.
        const tpt = data.map((user) => `<li>${user.name}</li>`);
        li.innerHTML= tpt;
        ul.appendChild(li);
        apis.appendChild(ul);
  }

};
xhttp.addEventListener('load',fetchData);
xhttp.open('GET',`${API}/users`);
xhttp.send();

