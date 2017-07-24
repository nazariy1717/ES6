// let && const

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


// spread operator

let arr1 = ['a','ab','abc'];
let arr2 = ['f','fg','fgh'];

let arr3 = [...arr1,'1','2',...arr2];

// console.log(arr3);


function add(a,b,c){
    console.log(a + b + c);
}

let numbers = [1,2,3];

add(...numbers);