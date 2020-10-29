// Given two sorted arrays, merge them to form a single sorted array

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];

    if(!array1 || array1.length === 0) {
        return array1;
    }
    if(!array2 || array2.length === 0) {
        return array2;
    }

    let array1Item = array1[0];
    let array2Item = array2[0];

    let i = 1;
    let j = 1;

    while(array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

mergeSortedArrays([3,4,5],[2,6,8]);
// Output : [2,3,4,5,6,8]

// This method only works if the input arrays are sorted individually by default