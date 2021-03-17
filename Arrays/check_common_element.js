
/* Given two arrays, create a function that lets the user know whether these two arrays contain any common items.
For example -   array1 = [a,b,c,d,e]
                array2 = [f,g,h,a] should return 'true' 
                
                array1 = [a,b,c,d,e]
                array2 = [f,g,h,i] should return 'false' */

let containsCommonItem = (array1, array2) => {
    if (array1 && array2) {
        for (let i = 0; i <= array1.length - 1; i++) {
            for (let j = 0; j <= array2.length - 1; j++) {
                if (array1[i] === array2[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

containsCommonItem(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h', 'a']);

// Output - true

containsCommonItem(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h']);

// Output - false

// Optimizing the solution using a map

let containsCommonItem2 = (array1, array2) => {
    if (array1 && array2) {
        const map = {};
        for (let i = 0; i <= array1.length; i++) {
            if (!map[array1[i]]) {
                map[array1[i]] = true;
            }
        }

        for (let i = 0; i <= array2.length; i++) {
            if (map[array2[i]]) {
                return true;
            }
        }
    }
    return false;
}

containsCommonItem2(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h', 'a']);

// Output - true

containsCommonItem2(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h']);

// Output - false

// Using ES6 and built-in methods

let containsCommonItem3 = (array1, array2) => {
    return array1.some(item => array2.includes(item));
}

containsCommonItem3(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h', 'a']);

// Output - true

containsCommonItem3(['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h']);

// Output - false