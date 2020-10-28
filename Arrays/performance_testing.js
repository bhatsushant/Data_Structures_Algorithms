// Using the 'performance.now()' function to test the time it takes to traverse a large array

let array = new Array(1000).fill('nemo');
function findNemo(arr) {
    let t0 = performance.now();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'nemo') {
            console.log('Found nemo!');
        }
    }
    let t1 = performance.now();
    console.log(`Call to find nemo took ${t1-t0} seconds`);
}

findNemo(array);