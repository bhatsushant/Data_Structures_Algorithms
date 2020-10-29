// Different ways to reverse a string

const string = 'Hi! How are you?';

// Creating our own reverse function
function reverse1(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return "Please enter a valid string...";
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >=0; i--) {
        backwards.push(str[i]);
        console.log(str[i]);
    }

    return backwards.join('');
}

// Using the built-in Array.reverse() method
function reverse2(str) {
    return str.split('').reverse().join('');
}

// Using the built-in Array.reverse() method but in ES6
const reverse3 = str => str.split('').reverse().join('');

reverse1(string);
reverse2(string);
reverse3(string);