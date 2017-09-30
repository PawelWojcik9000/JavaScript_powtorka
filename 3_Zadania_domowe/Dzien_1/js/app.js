
// ------------------ zadanie 1 ------------------
function findNum(array, number) {
    for (var i = 0; i < array.length; i++) {
        if(array[i] == number) return true;
    }
    return false;
}

// ------------------ zadanie 2 ------------------
function createIdentityMatrix(rows, columns) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
        for (var j = 0; j < columns; j++) {
            if(i==j) arr[i][j] = 1;
            else arr[i][j] = 0;
        }
    }
    return arr;
}

// ------------------- zadanie 3 ----------------
var Tree = function(type) {
    this.type = type;
    // this.bloom = function() {
    //     console.log("I'm blooming");
    // }
}

Tree.prototype.bloom = function() {
    console.log("I'm blooming");
}

var sosna = new Tree("sosna");
var swierk = new Tree("swierk");
var jodla = new Tree("jodla");
console.log(sosna.hasOwnProperty("bloom"));
console.log(swierk.hasOwnProperty("bloom"));
console.log(jodla.hasOwnProperty("bloom"));

sosna.bloom();