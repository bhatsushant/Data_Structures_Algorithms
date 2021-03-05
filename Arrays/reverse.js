// Reverse a given input - string or number

// Brute force method
function reverse(input) {
    if (typeof input === 'string') {
        let result = '';
        for (let i = input.length - 1; i >= 0; i--) {
            result = result + input[i];
        }
        return result;
    } else if (typeof input === 'number') {
        let digit, result = 0;
        while (input) {
            digit = input % 10;
            result = (result * 10) + digit;
            input = input / 10 | 0;
        }
        return result;
    } else {
        return "Please enter a valid input";
    }
}

// Reversing an input using ES6
let reverse2 = (input) => {
    if (typeof input === 'string') {
        return [...input].reverse().join();
    } else if (typeof input === 'number') {
        return parseInt(input.toString().split('').reverse().join(''));
    } else {
        return 'Please enter a valid input';
    }
}

reverse('hi there');
// Output - 'ereht ih'
reverse(1234);
// Output - 4321

reverse2('hi there');
// Output - 'ereht ih'
reverse2(1234);
// Output - 4321

