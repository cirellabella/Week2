// primitives (values) 
// string
let firstName = "John";
console.log(firstName);

// number
let number = 5;
console.log(typeof(number));

// boolean
let isPrime = false;
console.log(typeof(isPrime));

// undefined is a data type where nothing has been assigned
let x;
console.log(typeof(x));

// symbol
let symbol = symbol;
console.log(typeof(symbol));

// reference types

// array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers));

// object literals
let student = {
    firstName: "justin",
    lastName: "Henderson",
    id: "123456"
}
console.log(typeof(student));
console.log(student);

// map
let student2 = new Map();
// add values with a method called set
student2.set("firstName", "Justin");
student2.set("lastName", "Ellis");
console.log(typeof(student2));
console.log(student2);

// null (means it was set to null)
let y = null;
console.log(typeof(y));
console.log(y);

// date
let date = new Date();
console.log(typeof(date));
console.log(date);

