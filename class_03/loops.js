
//**************Loops****************
//for loop

// for (let i = 0; i <= 5; i++) {
//     console.log("Hello Everyone!");
    
// }

// console.log('Loop has ended😒');



//Calculate sum of n no.

// let sum = 0;

// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }

//     console.log('Sum =',sum); //15


// 1 to 5

// for(let i = 1; i <= 5; i++){
//     console.log('i = ',i);
// }


// while loop

// let i = 1;
// while (i <= 10) {
   
//     console.log('i = ',i);
//     i++
// }




//do-while

//  let i = 1;

//  do {
//         console.log('i = ',i);
//         i++;

//    }  while (i <= 10) 
 

//for-of loop ((Arrays and strings)
// let str = 'javascript'
// let size = 0;

// for (const i of str) { //iterator -> characters
//     console.log(i);
//     size++
// }
 
// console.log('Sting size =',size);// 10



//for-in loop(objects)

// let students = {
//     name: 'Rahul kumar',
//     age: 18,
//     cgpa: 9,
//     isPass: true
// };

// for (const key in students) {
    
//     console.log('key = ',key, 'value =',students[key]);
        
//     }


//practice q.1
//to print even no.

// for (let  num = 0;  num <= 100; num++) {
//     if (num % 2 === 0) {
//         console.log(num);
        
//     }
    
// }


//for odd no,

// for (let  num = 0;  num <= 100; num++) {
//     if (num % 2 !== 0) {
//         console.log(num);
        
//     }
    
// }


//practice q.2

// let gameNum = 20;

// let userNum = prompt("Guess the number :")

// while (userNum != gameNum) {

//     userNum = prompt('you entered wrong number, Guess Again :')
    
// }

// console.log('Congratulations, you entered a right number!');


//*************Strings****************


// let str = 'Dheeraj';


//Template literals

// let sentence = `This is an template literals ${1+2+3}`;
// console.log(  sentence);


// strings method

//toUpperCase

// let str = 'Dheeraj'

// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);


//toLowerCase

// let str = 'Dheeraj'

// let newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);


//trim

// let str = '   Dheeraj    js      '

// console.log(str.trim());


//slice

// let str = 'Dheeraj chaubey';

// console.log(str.slice(0,10));

//concate

// let str1 = 'dheeraj';
// let str2 = 'chaubey';

// let result = str1.concat(str2);

// console.log(result);



//replace

// let string = 'hello';
// console.log(string.replace('h','o'));


//practice question string-01

// let fullName = prompt('Enter your name to get uername:');

// let userName = '@' + fullName + fullName.length;

// console.log(userName);

























