'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// let && const ***********

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
    button = buttons[i];

    button.innerText = i;
    button.onclick = function (e) {
        console.log(i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    var button;

    _loop(i);
}

var MATH = {
    PI: 3.14159
};

// spread operator ***********

var arr1 = ['a', 'ab', 'abc'];
var arr2 = ['f', 'fg', 'fgh'];

var arr3 = [].concat(arr1, ['1', '2'], arr2);

// console.log(arr3);


function add(a, b, c) {
    console.log(a + b + c);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);

// template strings ***********

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}

createEmail('naz@gmail.com', '123@gmail.com', 'hello', 'how are you ?');

var name = "Yura";

console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}

// function parameters ***********

// function greet(greeting, name){
//     console.log(`${greeting} ${name}`);
// }

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    console.log(values);
    var sum = 0;
    values.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
}

sum(7, 5, 3, 10);

// for ***********

var arr = ['1a', '2b', '3c', '4d'];

for (var item in arr) {
    console.log(item);
}for (var index in arr) {
    console.log(arr[index]);
}var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var some = _step.value;

        console.log(some);
    } // objects ***********

} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'bill@gmail.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,

    sayHello: function sayHello() {
        console.log('Hi ' + this.firstName + ' ' + this.lastName);
    }
};

console.log(person);
person.sayHello();

function createCar(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, 'get' + property, function () {
        return this[property];
    }), _ref;
}

console.log(createCar('vin', 1));