let menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: '/img/pancakes.jpg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: '/img/dinner-burger.webp',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "./img/godzilla.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "./img/breakfast.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "./img/egg-attack.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "./img/oreo.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "./img/bacon.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "American Classic",
        category: "lunch",
        price: 12.99,
        img: "./img/american.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        category: "shakes",
        price: 16.99,
        img: "./img/green.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Bison Steak",
        category: "dinner",
        price: 22.99,
        img: "./img/steak.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

let menuContainer = document.getElementById('menu-container');
displayMenu(menu);

let filterBtns = document.getElementsByClassName('filter-btns');

function filterByCategory(category) {
    console.log(category);
    let filteredItems = menu.filter(item => item.category == category)
    displayMenu(filteredItems);
}

function displayMenu(menu) {
    let displayMenuItems = menu.map(function(item) {
        return `
        <div class="menu-item">
            <div class="image">
                <img src=${item.img} alt="image">
            </div>
            <div class="item-info">
                <div class="title">
                    <div>${item.title}</div>
                    <div class="price">$${item.price}</div>
                </div>
                <div class="desc">${item.desc}</div>
            </div>
        </div>`
    })
    
    displayMenuItems = displayMenuItems.join('');
    menuContainer.innerHTML = displayMenuItems;
}
