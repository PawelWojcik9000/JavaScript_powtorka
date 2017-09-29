
function add(array) {
    var added = 0;
    for (var i = 0; i < array.length; i++) {
        added += array[i];        
    }
    return added;
}

function multiply(array) {
    var multiplied = 1;
    for (var i = 0; i < array.length; i++) {
        multiplied *= array[i];
    }
    return multiplied;
}

var arr = [1,2,3,4,5];
console.log(add(arr));
console.log(multiply(arr));