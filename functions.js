// traditional function (method)
helloWorld("Justin");
helloWorld(2);
helloWorld(true);
helloWorld(null);
helloWorld(2 < 5);

// hoisting- it gets moved to the top of the file and runs before the rest of the code
function helloWorld(input = "no input"){
    console.log("Hello " + input);
}

// function expression
// create a variable and assign it to a function
// function expressions are not hoisted

const calcVolume = function(length, width, height){
    return length * width * height;
}

let volume = calcVolume (2, 3, 4);
console.log(volume);

// arrow function
const area = (length, width) => length * width;

let area1 = area(2, 3);
console.log(area1);

// IIFE- Immediately Invoked Function Expression
// Create a function and then calling at the same time
((input) => {
    console.log("IIFE Function " + input);
} )("Hello from Justin");

((number) => {
    console.log((number % 2 === 0));
})(8);