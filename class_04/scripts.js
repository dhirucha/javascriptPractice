
// let heroes = ['hulk','superman','spiderman','shaktiman'];

// let marks = [45,45,67,78,94,90,56]

// marks[2] = 66

// console.log(marks)

// console.log(marks.length)

// console.log(heroes.length);



//looping in array

// for (let  i= 0;  i < marks.length; i++) {

//     console.log(marks[i]);
// }

// for of

// for (const hero of heroes) {
    
//     console.log(hero);
// }



// let cities = ['mirzapur','gurugram','delhi','rampur',
// 'ayodhya']


// for (const city of cities) {
   
//     console.log(city.toUpperCase());    
// }


//Practice question-1

//Average of marks

// let marks = [85,97,44,37,76,60]

// let sum = 0;

// for (const val of marks) {
//     sum += val;
//     console.log(sum);

// }

// let avg = sum / marks.length

// console.log(`The average marks of students = ${avg}`);


//practice q-2

// let items = [250,645,300,900,50];

// let i = 0;

// for (const val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;

//     console.log(`value after discount = ${items[i]}`);
//     i++
    
// }



//Array method

// let foodItems = ['potato','apple','litchi','tomato'];


// foodItems.push('chips','panner');

// foodItems.pop()


// console.log(foodItems);

// console.log(foodItems.toString());


// unshift

// let heroes = ['shaktiman','bahubali','ironman','antman','doctor strange'];

// heroes.unshift('krish')
// heroes.shift('krish')

// console.log(heroes);

// console.log(heroes.slice(1,4));

// console.log(heroes.splice());

//splice

// console.log(heroes.splice(2,3,'dk'));


//Practice q.3

let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];


// companies.shift('Bloomberg')
companies.splice(2,1,'Ola')

companies.push('Amazon')

console.log(companies);