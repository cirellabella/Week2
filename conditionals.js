// if statements/ conditionals operators
if(2<4){
    console.log("2 is less than 4");
}
// "2 is less than 4")

// == is equality but it is diff in js
if(2 == "2"){
    console.log("2 as a number is equal to 2 as a string");
}
// "2 as a number is equal to 2 as a string"

// === is strict equality identity check that the value and the type are the same
if(2 === "2"){
    console.log("2 as a number is equal to 2 as a string");
}

// we can use the not operator with identity !==
console.log(2 !== "2");
// true
console.log(2 != "2");
// false

// truthy and falsy values
let x = 5;
if(x){
    console.log("This code will run");
}

// lets say we want to get a user input
// get user input with prompt() 
// let firstName = prompt("Enter your name");
// while(!firstName){
    // inside of this loop they didn't type anything and i prompt again
// firstName = prompt("You didn't type anything in, try again")
// }

// switch statements
switch(x){
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    default:
        console.log("x is not 1 or 2");
}

// ternary operator
let number = 6;
// condition? what to do when it is true: what to do if it is false
let output = number > 5 ? "number is greater than 5" : "Number is less than 5";
console.log(output);