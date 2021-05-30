// Reverse a string

// Steps to reverse a string
// i.   Convert the given string into an array
// ii.  Reverse the elements of the array
// iii. Join the array back into a string
// iv.  Return the reversed string

// 1. Using traditional for loop

function reverse1(str) {
    let reversed = '';
    debugger;
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

reverse1('abcd');

// 2. Using the new 'for..of' loop

function reverse2(str) {
    let reversed = ''
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

reverse2('abcd');

// 3. Using the spread operator

function reverse3(str) {
    return [...str].reverse().join('');
}

reverse3('abcd');

// 4. USing the built-in reverse function of an array

function reverse4(str) {
    return str.split('').reverse().join('');
}

reverse4('abcd');