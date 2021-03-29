function hello(){
	console.log("Hello!");
}

hello();


let garden = {
	flowers: "peonies", 
	vegetables: "tomatos",
	fruit: "pears"
}
console.log(garden.flowers)

let garden2 = {
	flowers: "peonies", 
	"vegetables": "tomatos",
	fruit: "pears"
}
console.log(garden2["vegetables"]);


function pizza(type1, type2){
	console.log(`I got a slice of ${type1} and ${type2} pizza.`);
}

pizza("pepperoni", "chesse");


for (let y=7; y >= 1; y-=1){
	console.log(y);
}

if (1=="1") {
	console.log("True");
} else {
	console.log("False");
}

let movie ={
	disney: {
		marvel: [
			"avengers","captain america","thor","iron man",]
}};

console.log(movie.disney.marvel[3]);

// function delaration

function apple(){
	console.log("apple");
}

apple();

// parameters/arguments

function toppings (topping1, topping2){
	console.log(`I got ${topping1} and ${topping2} on my ice cream!`)
}
toppings("sprinkles", "fudge");

//loops

for (let l = 20; l>=15; l-=1){
	console.log(l);
}

//conditionals

let r = 1;
if (r=="1"){
	console.log("rachel");
} else {
	console.log("False");
}

//logical operators

if (1!=="1"){
	console.log(true);
} else {
	console.log(false);
}

//creating and accessing objects

let object = {
	name: "Rachel",
	age: 27,
	occupation: "designer",
}

console.log(object.name)

console.log(`${object.name} is ${object.age} years old.`);