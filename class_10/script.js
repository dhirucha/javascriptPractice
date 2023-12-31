//classes and objects

// const student = {
//     name: 'dj',
//     marks:9.5,
//     printMarks: function () {
//         console.log('marks = ',this.marks);
//     },
// }


//class- Blueprint

// class Myclass{
//     constructor(){

//     }
//     myMethod(){}
// }

// let myObj = new Myclass(); syntax of an class



// class car{

//     constructor(){
//         console.log('creating new object');
//     }
//     start(){
//         console.log('start');
//     }

//     stop(){
//         console.log('stop');
//     }

//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let mercedes = new car();
// mercedes.setBrand('fortuner')


// class parent{
//     hello(){
//         console.log('hello');
//     }
// }

// class child extends parent {

// }

// let Obj = new child();


//Practice q-1

let Data = 'secret info';
class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log('data =',Data);
    }
}

let student1 = new user("Dj","dj@gmail.com");
let student2 = new user('dk','abc@gmail.com');
