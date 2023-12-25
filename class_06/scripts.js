
//Dom manipulation

// let heading = document.getElementById('heading'); //h1
// console.log(heading);


// let button = document.getElementsByClassName('mybutton');

// console.log(button);


// let elements = document.querySelector('p') // first elem
// console.log(elements);

// let allElem = document.querySelectorAll('.heading');// allElem
// console.log(allElem);

// let div = document.querySelector('div');
// console.dir(div);


//Practice q.1

// let append = document.querySelector('h2')

// append.innerText = 'Hello javascript! from Dheeraj'


//practice q.2

let divs = document.querySelectorAll('.box');


// divs[0].innerText = 'Hello';
// divs[1].innerText = 'Javascript!'
// divs[2].innerText = 'from Dheeraj'

let idx = 1;

for (const div of divs) {
  div.innerText = `new unique value ${idx}`; 
  idx++;
}


