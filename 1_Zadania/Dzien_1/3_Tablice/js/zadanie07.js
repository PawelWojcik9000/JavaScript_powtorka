function getMissingElement(array) {
    
    var missing = array[0];
    for (var i = 0; i < array.length; i++) {
        if(missing == array[i]) {
            missing++;
            if(missing == array[array.length-1]) return null;
        }
        else return array[i] - 1;
    }
    
}