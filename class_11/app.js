
//Callback e.g.
// function sum(a,b){
//     console.log(a + b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b)
// }

// calculator(1,2,sum)


//promises

let promise = new Promise((resolve,reject) => {
    console.log('I am a promise');
    resolve('success');
    //reject('some error occured')
})


let promises = promise();
promises.then(() => {
    console.log('promise fulfilled');
})

