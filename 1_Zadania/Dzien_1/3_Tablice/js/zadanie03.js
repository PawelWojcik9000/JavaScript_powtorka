function distFromAvarage(array) {
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / array.length;
    
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if(array[i] > avg) {
            var diff = array[i] - avg;
            newArr.push(diff);
        } else {
            var diff = avg - array[i];
            newArr.push(diff);
        }
    }
    return newArr;
}