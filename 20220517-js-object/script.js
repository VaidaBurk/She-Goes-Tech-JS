let user = new Object(); // object constructor
let user2 = {}; // object literal

let user3 = {
    name: "John",
    age: 30,
};

user3.age = 31;
console.log(user3.age);

console.log(user3['name']);

let bird = {
    "can sing": true,
    canFly: false,
}

bird.canFly;
bird['can sing'];

let fruit = prompt("Which fruit to buy?", "Apple");
let bag = {
    [fruit]: 5,
}

alert(bag.Apple);

function createUser(name, age){
    return {
        name: name,
        age: age,
    }
}

let user4 = createUser("Tom", 16);
console.log(user4);

if (user4.name === undefined){
    alert('no such property');
}

delete user4.name;

