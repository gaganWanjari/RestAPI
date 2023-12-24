function uniqueElem(arr) {
    var result = [];
    var uniqueSet = new Set();

    for (var i = 0; i < arr.length; i++) {
        if (!uniqueSet.has(arr[i])) {
            uniqueSet.add(arr[i]);
            result.push(arr[i]);
        }
    }

    return result;
}

var inputArray = [1, 2, 2, 3, 4, 5, 6, 1];
var uniqueArray = uniqueElem(inputArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

