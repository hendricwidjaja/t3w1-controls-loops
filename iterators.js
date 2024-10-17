let fruitChoices = [
    "oranges",
    "bananas",
    "mangoes"
];

for (let index = 0; index < fruitChoices.length; index++) {
    const element = fruitChoices[index];
    console.log(element);
    console.log(`The fruit of this iteration is ${element}`)
}

// start at 0, until 0 reaches 4, do a thing and increase 0 up by 1 every time we do that thing
/*
The for of
for (let value of iterable) { // Your code here }
    Works with iterable objects it can be arrays, strings, maps, sets
    You can use break, continue, or return to exit or control the flow of the loop.
*/
for (let i = 0; i < 5; i++) {
    console.log(`This is the ${i} iteration of the loop`); //string interpolation
    console.log("This is the " + i + " iteration of the loop"); // String concatenation
}

// forEach
/*
The array.forEach only works with arrays objects.
You cannot use break, continue, to control the loop flow.
*/
fruitChoices.forEach(element => {
    console.log("For each loop result: " + element.toLocaleUpperCase());
})

// for of

for (const fruit of fruitChoices) {
    console.log("For of result: " + fruit)
}

//map -> map returns a new array, and every element has a change applied on it

let fruitChoicesShortened = fruitChoices.map(fruit => {
    console.log("Map result: " + fruit)
    return fruit.substring(0,3);
})

console.log(fruitChoicesShortened)

// filter -> returns a new array, only with the elements that meet the condition.


let nonCitrusFruits = fruitChoices.filter(fruit => {
    return fruit != "oranges" && fruit != "lemons"
})

console.log(nonCitrusFruits)