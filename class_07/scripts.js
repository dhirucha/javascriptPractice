// let div = document.querySelector('div');
// console.log(div);

// let id = div.getAttribute('id');
// console.log(id);


// let para = document.querySelector('p');

// console.log(para.setAttribute('class','newClass'));

// let el = document.createElement('button');
// el.innerText = 'click me!'
// console.log(el);


// let div = document.querySelector('div');
// div.append(el); //to add an element inside the div at start

// div.prepend(el); //to add an element inside the div at end

// div.before(el); //to add element before an element

// div.after(el); //to add element after an element


// let para = document.querySelector('p');

// para.remove(); //to remove node in js


//practice q.1

let newBtn = document.createElement('button');
newBtn.innerText = 'click me!';
// console.log(newBtn);

newBtn.style.backgroundColor = 'red';
newBtn.style.color = 'white';

let insertContent = document.querySelector('body').prepend(newBtn);



//practice q.2

let para = document.querySelector('p');

para.classList.add('newClass');




