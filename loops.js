// while loop is a pre test loop test the condition before the loop runs
while(false){
    console.log("will this run?");
}
// it doesn't

// do while loop is a post test loop, the condition after the loop runs
do{
    console.log("will this run?");
}
while(false);
// this runs!

let numbers = [1, 2, 3, 4, 5];

// for loop that goes thru the array 
for(let i = 0; i < number.length; i++){
    console.log("the element " + number[i] + " is at index " + i);
}

// foreach loop (int x in numbers) = for of

for(let element of numbers){
    console.log(element);
}
// 1, 2, 3, 4, 5

// foreach loop
// foreach is a method- a method specifically ref to a function
// that is called on an object
console.log("For Each")
// foreach takes what is called a callback function as a parameter
// it calls the function for each eleemtn in the array
numbers.forEach(displayElement);
function displayElement(element, index){
    console.log("the element " + element + " is at index " + index);
}

// foreach using an arrow function
numbers.forEach((element, index) => {
    console.log("the element " + element + " is at index " + index);
});