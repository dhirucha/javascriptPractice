//Functions

// function name() {
//     console.log('Hello world!');
    
// }

// name();

// function myFunction(){
//     console.log('Hello! Dheeraj, All the best for great journey');
// }

// myFunction();


// function myFunction(msg) { //parameter
//     console.log(msg);
    
// }

// myFunction('Hello!');//Argument


//Add two numbers

// function addNumbers(x,y){
//     console.log(x + y);
// }

// addNumbers(100,12345);


// function sum(x,y){
//     s = x + y;
//     return s;
// }

// let val = sum(4,6)
// console.log(val);


//Arrow function

// const arrowSum = (a,b) =>{
//     console.log(a + b);
// }

// arrowSum(10,23);// 33


//Practice q.1



// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         console.log(char);
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++
//         }
//     }
//     console.log(count);
// }


// countVowels('hello');


//Arrow function

// const countVow = (str) => {
//     let count = 0;
//     for(const char of str){
//         console.log(char);
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++
//         }
//     }
//     console.log(count);
// }


// countVow('hello')


//forEach loop

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val) => {
//     console.log(val);

// })


//practice q.2

// let nums = [2,3,4,5,6]

// nums.forEach( (nums) => {
//     console.log(nums ** 2);
// })


//Array methods

//1).MAP


// let nums = [2,3,4,5,6];

// nums.map((val) => {
//     console.log(val);
// })

// let nums = [2,3,4,5,6];

// let newArr = nums.map((val) => {
//     return val * 2;
// });

// console.log(newArr);


//2).filter method

// let arr = [1,2,4,5,6,8,9,10]

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(evenArr);


//3).Reduce method


// let arr = [1,2,4,5,]

// const output = arr.reduce((res,curr) => {
//     return res + curr;
// });


// console.log(output);


//practice q.3

// let marks = [50,91,99,89,98,76,94];

// let greaterMarks = marks.filter((val) => {
//     return val > 90;
// })

// console.log(greaterMarks);


//practice q.4

let n = prompt('Enter a number:');

let arr = [];

for (let i = 1; i <= n; i++) {

    arr[i-1] = i;
    
}

console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
})

console.log(sum);


let factorial = arr.reduce((res,curr) => {
    return res * curr;
})

console.log('Factorial =',factorial);





