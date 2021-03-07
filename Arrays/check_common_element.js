// Check whether a common element exists in two given arrays

// Brute force approach
let findCommon = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}

// Optimizing by creating a map
let findCommon2 = (array1, array2) => {
    let map = {};
    for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (map[array2[i]]) {
            return true;
        }
    }
    return false;
}

// Using ES6 and built in functions
let findCommon3 = (array1, array2) => {
    return array1.some(item => array2.includes(item));
}