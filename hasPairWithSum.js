// Given an array of numbers, return 'true' if the array contains a pair which adds to a given sum
// Eg. array = [6,4,3,1,7], sum = 9 ==> Should return 'true' as 6+3 = 9
// Eg. array = [6,4,1,7], sum = 9 ==> Should return 'false' as there are no pairs which add up to 9

// Brute force ==> O(n^2)
let sum = (array, sum) => {
    length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] + array[j] === sum) {
                return true;
            }
        }
    }
    return false;
}


// Optimized ==> O(n)
let sum = (array, sum) => {
    length = array.length;
    let mySet = new Set();
    for (let i = 0; i < length; i++) {
        if (mySet.has(array[i])) {
            return true;
        }
        mySet.add(sum - array[i]);
    }
    return false;
}