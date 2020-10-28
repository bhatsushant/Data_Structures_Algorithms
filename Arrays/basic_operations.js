// Basic operations to determine time complexity

const strings = ['a','b','c','d'];

strings.push('e'); // O(1)

strings.pop(); //O(1)

strings.unshift('x'); //O(n)

// The unshift() operation only adds an item at the beginning of the array but the reason it's time complexity is O(n) is because it involves the tedious operation of looping through the entire array and reassigning the indexes

strings.splice(1,0,'e'); // O(n)