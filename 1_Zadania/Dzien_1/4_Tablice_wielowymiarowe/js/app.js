var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

function checkArray(array) {
    var retTab = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length-1; j++) {
            if(array[i][j] % 2 === 0) retTab.push(true);
            else retTab.push(false);
        }
    }
    return retTab;
}

function print2DArray(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

var zad3Array = [
    [1,2,3,4,5],
    ["Ala", "ma", "kota"], 
    [true, false, true]
]

function create2DArray(rows, columns) {
    var arr4 = [];
    var count = 1;
    for (var i = 0; i < rows; i++) {
        arr4[i] = [];
        for (var j = 0; j < columns; j++) {
            arr4[i][j] = count;
            count++;
        }
    }
    return arr4;
}

