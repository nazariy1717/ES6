// let && const ***********

var buttons = document.querySelectorAll('button');

for( let i = 0; i < buttons.length; i++){
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function(e){
      console.log(i);
    };
}

const MATH = {
    PI: 3.14159
};


// spread operator ***********

let arr1 = ['a','ab','abc'];
let arr2 = ['f','fg','fgh'];

let arr3 = [...arr1,'1','2',...arr2];

// console.log(arr3);


function add(a,b,c){
    console.log(a + b + c);
}

let numbers = [1,2,3];

add(...numbers);



// template strings ***********

function createEmail(to,from,subject,message){
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('naz@gmail.com','123@gmail.com','hello','how are you ?');

let name = "Yura";

console.log(upperName`Hello ${name}`);

function upperName(literals, value){
    return literals[0] + value.toUpperCase();
}



// function parameters ***********

// function greet(greeting, name){
//     console.log(`${greeting} ${name}`);
// }

function greet(greeting = 'Hello', name = 'friend'){
    console.log(`${greeting} ${name}`);
}

greet('Hi','Bill');
greet('Hi');
greet(undefined,'Bill');
greet();



function sum(...values){
    console.log(values);
    let sum = 0;
    values.forEach(function(value){
        sum += value;
    })
    console.log(sum);
}

sum(7,5,3,10);
