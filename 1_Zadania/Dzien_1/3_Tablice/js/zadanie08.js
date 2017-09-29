var year = [1995, 2001, 1988, 2011, 1999];

var tmp = 0;
function sortTable(array) {
    for (var i = 0; i < array.length - 1; i++) {
       for (var j = i + 1; j < array.length; j++) {
           if(array[i] > array[j]) {
                tmp = array[j];
                array[j] = array[i];
                array[i] = tmp;
           }
       }
    }
    var d = new Date();
    var currentYear = d.getFullYear();
    var old = currentYear - array.shift();
    var young = currentYear - array.pop();

    console.log("Najmlodszy: "+young+" | Najstarszy: "+old);
}