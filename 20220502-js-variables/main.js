const car = {
    type: "Fiat",
    model: "500",
    color: "white",
}

console.log(car);
console.log(typeof car);
console.log(car.model);
console.log(car.type);
cosmole.log(car.color);

console.log(car["model"]);

let prop = "type";
console.log(car[prop]);

let str1 = new String("Hello");
console.log("Type: " + typeof str1);


let str2 = "Hello";
str2.length
str2.substring(1,3)
str2.toLowerCase()
str2.toLocaleUpperCase()
