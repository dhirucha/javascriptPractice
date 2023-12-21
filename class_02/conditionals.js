// console.log('Hello! world');
//Multi line comment =>  /*What is comment*/ 

//Single line comment <=

//**********Operators***********

// Arithmatic



// console.log('a + b =',a + b); //output: 7 '+'
// console.log('a + b =',a - b); //output: 3 '-'
// console.log('a + b =',a * b); //output: 10 '*'
// console.log('a + b =',a / b); //output: 2.5 '/'

//********* modulus ***********

// let x = 10;
// let y = 2;
// console.log(x % y); 
/* output: 0 => It gives remainder of divisor and dividend*/

//Exponentiation
//power (**)

// let c = 10;
// let d = 2;
// console.log(x ** y); 
/* output: 100 It gives power of an no. */


// ******Unary Operator*******

// let a = 5;
// let b = 2;

// console.log('a =',a & 'b =',b);
// ++a //6
// console.log('a =',a);

// console.log('a =',a & 'b =',b);
// a++ //7
// console.log('a =',a);

// console.log('a =',a & 'b =',b);
// --a //6
// console.log('a =',a);

// console.log('a =',a & 'b =',b);
// a-- //5
// console.log('a =',a);

// 

//Assignment operator

// let a = 5;
// let b = 2;

// a += 4;// a = a + 4

// console.log('a =',a); //9

// a -= 4;// a = a + 4

// console.log('a =',a); //1


// a *= 4;// a = a * 4

// console.log('a =',a); //20

// a /= 4;// a = a / 4

// console.log('a =',a); // 1.25

// a  %= 4;// a = a % 4

// console.log('a =',a); // 1

// a  **= 4;// a = a ** 4

// console.log('a =',a); // 625

//Comparison operator

//  let a = 5;
//  let b = 5;

//  console.log('a==b',a == b); //True

// console.log('a!=b',a != b); //false

// console.log('a === b',a === b); //false

// console.log("a > b",a > b);

// console.log("a < b",a < b);

// console.log("a >= b",a >= b);

// console.log("a <= b",a <= b);

//*********Logical operator */

// &&

let a = 6;
let b = 5;

let cond1 = a > b; // true
let cond2 = a === 7; // true

// console.log('cond1 && cond2 =', cond1 && cond2);

// console.log('cond1 || cond2 =', cond1 || cond2);

// console.log('cond1 ! cond2 =', !(a > b));



//********Conditionals statements************

// let age = 18;
// let mode = 'dark';
// let color;

// if (mode === 'dark') {
//     color = 'black'
    
// }

// else  {
//     color = 'white'
    
// }

// console.log(color);

// if (age > 18) {
    
//     console.log('You can vote!');
// }

// else{
//     console.log("You can't vote");
// }

// Even or odd(if-else)

// let num = 20;

// if (num % 2 === 0) {

//     console.log(num,'is Even number.');
    
// }else{
//     console.log(num,'is odd number.');
// }

// let mode = 'green';
// let color;

// if (mode === 'dark') {
//     color = 'black';
    
// }else if (mode === 'blue') {
//     color = 'blue';
    
// } else if (mode === 'pink') {
//     color = 'pink'
    
// }else{
//     color ='white'
// }

// console.log(color);



//****Ternary operator */

// let age = 16;

// let result = age >= 18 ? "adult" : "not adult"
// console.log(result);



//*******Switch statement */

// const foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// // Logs 0 and 1

//*******Practice question */

// let name = prompt('Hello');
// console.log(name);

// let num = prompt('Enter a number');

// if (num % 5 === 0) {
//     console.log(num,'is a multiple of 5');
    
// }
// else{
//     console.log(num,'is a not multiple of 5');
// }




//******Practice question-2 */

let studentScore = 25;

if (studentScore >= 90) {
    console.log('A');
    
}else if (studentScore <= 89 && studentScore >= 70) {
    console.log('B');
    
}else if (studentScore <= 69 && studentScore >= 60) {
    console.log('C');
    
}else if (studentScore <= 59 && studentScore >= 50) {
    console.log('D');
    
}else{
    console.log('Fail');
}
