// console.log("Hello!")

// Number 0 is false
// Empty string "" is also false

// If 
let someMessage = "Bananas";

if (someMessage == "Oranges") {
    //truthy condition
    console.log("We have oranges");
}

console.log(someMessage);

let someNumber = 3;

if (someNumber === 10) {
    console.log("We have 10!!");
}

if (someNumber >= 5 ) {
    console.log("We have 5 or more!");
} else {
    console.log("Less than five");
}

// Ternary Operators

let someCoolMessage = (someMessage === "Bananas")
    ? someMessage.toLocaleUpperCase() 
    : "Default message here."

if (someMessage === "Bananas") {
    someCoolMessage = someMessage.substring(0,2).toLocaleUpperCase(); 
} else {
    someCoolMessage = "Default message in the else statement.";
}

console.log(someCoolMessage)

// Switch Operator

someMessage = "mango";

switch (someMessage) {
    case "orange":
        console.log("We have oranges");
        break;
    case "banana":
        console.log("We have bananas");
        break;
    case "mango":
        console.log("We have mangoes");
        break;
    default: 
        console.log("We have another fruit")
}

// Short circuit logic


someMessage = "Mango";
// evaluate if the first part is true, if it is, we return the second part
// if the first part is false, it returns the first part "", 0, false boolean
let circuitLogicMessageAnd = someMessage && "We have a message from OR";

console.log(circuitLogicMessageAnd);


someMessage = "Mango";
// Returns the first block that is true
// If both blocks are false, it will return the second block (e.g. "" || 0;)
let circuitLogicMessageOr = someMessage || "We have a message";

console.log(circuitLogicMessageOr);