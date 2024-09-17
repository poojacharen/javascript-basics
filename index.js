  /* Constants */
const interestrate = 0.3;
console.log(interestrate);

// we dont want the value to change or else we'll end up with bugs
// so instead of variable(let), we ust constants(const)
// The value of the variable as the name implies can change, but the constant value cannot be changed

/* Primitive Types */

let name = 'Poojitha'; //String Literal
let age = 29; //Number Literal
let isApproved = true; //Boolean Literal - can be true or false
let firstName = undefined;
let selectedColor = null; //If the user selects a color we can assign a color name instead of null, if not selected then it is a null

/* Dynamic Typing */
//JS is a dynamic language
//Two types of languages : Static and Dynamic languages
//In static variable, the type of the variable is set and cannot be changed in the future 
//In dynamic variable like JS, the type of variable can be changed in runtime


// Reference Types - Objects, Arrays and Functions
/* Objects */ {} // object literal

let person = {
name: 'Poojitha' ,
age: 30
};

// Dot Notation
person.name = 'Priya';

// Bracket Notation
person['name'] = 'Hima';


console.log(person.name);

/* Arrays */ [] // Array literal

let selectedColors = ['blue' , 'black'];  //output comes with an index, index of first element(blue) is 0 and second element (black) is 1
selectedColors[2] = 'red'
console.log(selectedColors);  //I have mentioned the index of the second element

/* Functions */  

function greet() {
    console.log('Hello World');
}

greet();

/* Types of Functions */
// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Poojitha', 'Nagallapati');

// Calculating a value
function square(number) {
    return number * number * number;
}

console.log(square(3));

