
//*********************Lexical Scoping*************************** */
let score = 4;

function one() {
    let score = 0;
    console.log(score);
}

function two() {
    
    console.log(score);
}

// one()
// two()
// console.log(score);


function outerfunc(){
   let outerVar = 'I am in the scope at level 1'
   function innerFunc(){
    let innerVal = 'I am at scope at level 2'
    // console.log(outerVar);
   }
//    console.log(innerVal);
   innerFunc()

}
outerfunc()


//**********************Closure*****************************************


function superFun(){
    let outerVal = 'I am outer'
    function minorFunc(){
        console.log(outerVal);
    }
    minorFunc()
}
// superFun()



const errorMessage = 'File not Found!';

setTimeout(function callBack(){
    console.log(errorMessage);
}, 1000)



let pageCount = 0;

const items = [2,3,5,6,8];

items.forEach(function iterator(num){
    pageCount++
    console.log(num);
})

console.log('pagecount = ',pageCount);
