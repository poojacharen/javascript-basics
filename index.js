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


/* Logical operators */

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
 console.log(true && true);
 console.log(true && false);
 console.log(false && false);

// Real time example using && and || and !
// Logical OR (||) Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

// NOT (!) Whatever we give it gives the opposite, if it's false it gives true and viceversa
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

/* Logical operators with Non-Booleans */

// Falsy (False)
// undefined
// null
// 0
// false
// ''
// NaN (NotaNumber)

let userColor = 'red';
let defaultColor = 'blue'
let currentColor = userColor || defaultColor;

console.log(currentColor);

/* Bitwise operators */

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

console.log(1 | 2);  // Bitwise OR
console.log(1 & 2);  // Bitwise AND

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

/* Operators Precedence */

let z = 2 + 3 * 4; // multiplication operator has higher precedence, so it multiplies first and then adds the number

console.log(z);

let w = (4 + 5) / 3; // numbers inside the paranthesis has higher precedence, so it adds the number and later divides the number

console.log(w);


/* Exercise : Swapping Variables */

let e = 'red';
let f = 'blue';

let g = e;
e = f;
f = g;

console.log(e);
console.log(f);


/* If...else */

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!  (24hr format)

let hour = 14;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
    console.log('Good evevning');


/* Switch...case */

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

        case 'moderator':
            console.log('Moderator User');
            break;

            default:
                console.log('Unknown User');
}

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');




