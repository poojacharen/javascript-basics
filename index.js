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


/* Operators */
/* Arithmetic Operators */

// let x = 50;
// let y = 40;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
// console.log(x++);
// console.log(++x);
// console.log(x);

//  Decrement (--)
// console.log(x--);
// console.log(--x);

/* Assignment operators (=) */ 

// let x = 20;

// console.log(x = x + 5);
// console.log(x += 5);

// console.log(x = x * 3);
// console.log(x *= 3);


/* Comparison operators */

let x = 1;

// Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x >= 1);

//Equality 
console.log(x === 1); // x isequal to 1
console.log(x !== 1); // x isnotequal to 1


/* Equality operators */

// Strict Equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality (Value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

/* Ternary or Conditional operators */

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 108;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);



