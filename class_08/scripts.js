// let btn1 = document.querySelector('#btn1');

// btn1.onclick = () => {
//     console.log('btn1 was clicked!');

// }



// let div = document.querySelector('.div');

// // div.ondblclick = () => {
// //     console.log("div was clicked 2x");
// // }


// // eventListeners


// div.addEventListener('click',() => {
//     console.log('div was clicked!');
// })

// const handler1 = () => {
//     console.log('div was clicked!1');
// }

// div.addEventListener('click',handler1)


// div.removeEventListener('click', handler1)


//practice q.1

let modeBtn = document.querySelector('#modeChanger');

let currMode = 'light';

modeBtn.addEventListener('click', () => {
    if(currMode === 'light'){
        currMode = 'dark'
        document.querySelector('body').style.backgroundColor = 'black'
    }
    else{
        currMode = 'light'
        document.querySelector('body').style.backgroundColor = 'white'
    }
    console.log(currMode);
})



