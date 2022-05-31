const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
		'X-RapidAPI-Key': '125a1d1741msh07b331c5ca1994dp1675cejsnd66baa5d2be3'
	}
};

const ul = document.getElementById('burger-id');
const li = document.createElement('li');

fetch('https://burgers1.p.rapidapi.com/burgers', options)
	.then(response => response.json())
    .then(response => {
        let burgerData = response;
        
        burgerData.map(burger => {
            let name = document.createElement('h2');
            let web = document.createElement('span');
            name.innerHTML = `${burger.name}`;
            web.innerHTML = `${burger.web}`;

            li.appendChild(name);
            li.appendChild(web);
            ul.appendChild(li);
        })
    })

	.catch(err => console.error(err));
    ul.appendChild(li);