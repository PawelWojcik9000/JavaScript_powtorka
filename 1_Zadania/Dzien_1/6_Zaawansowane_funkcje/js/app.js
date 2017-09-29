/**
 * Created by Agata on 21.01.2016.
 */



var id = setInterval(function() {
    console.log('jestem wywoływana co dwie sekundy');
}, 2000
)


clearInterval(id)

function boilEgg(boilTime) {
    var timeOut = setTimeout(function () {
        console.log("Jajko ugotowane");
        clearTimeout(timeOut);
        clearInterval(interval);
    }, boilTime * 1000);
    var interval = setInterval(function () {
        console.log("Jajko sie gotuje");
    }, 1000);
    
}

var sortNumbers = function(array) {
    var numbers = array;
    numbers.sort(function (a,b) {
        return a-b;
    });
    var largest = numbers.pop();
    return largest;
}
