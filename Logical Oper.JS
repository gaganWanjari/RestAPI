function commonEle(arr1, arr2) {
    var result = [];

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break;
            }
        }
    }

    return result;
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
var commonEleArr = commonEle(array1, array2);
console.log(commonEleArr); // Output: [3, 4, 5]
