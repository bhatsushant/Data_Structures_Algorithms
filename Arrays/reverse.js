let reverse = (input) => {
    if (typeof input === 'string') {
        let reversedStr = '';
        for (let i = input.length - 1; i >= 0; i--) {
            reversedStr += input[i];
        }
        return reversedStr;
    } else if (typeof input === 'number') {
        let reversedNum, digit = 0;
        while (input) {
            digit = input % 10; // This will give us the last digit
            reversedNum = reversedNum * 10 + digit; // For eg. if the number is 1234, then in the second iteration the digit would be 3 and reversedNum = 40 + 3 = 43
            input = input / 10 | 0; // Will remove the decimal point
        }
        return reversedNum;
    } else {
        return "Please enter a valid input";
    }
}

reverse('Hello');

// Output = olleh

reverse(12345);

// Output - 54321

// Using built-in methods
let reverse2 = (input) => {
    if (typeof input === 'string') {
        return [...input].reverse().join('');
    } else if (typeof input === 'number') {
        return parseInt(input.toString().split('').reverse().join(''));
    } else {
        return "Please enter a valid input";
    }
}

reverse('Hello');

// Output = olleh

reverse(12345);

// Output - 54321