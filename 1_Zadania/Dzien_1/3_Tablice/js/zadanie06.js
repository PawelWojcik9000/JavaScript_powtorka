function factors(num) {
    var arr = [];
    
    if(num > 0) {
        for(var i=num; i >= 0; i--) {
            if(num % i == 0) arr.push(i);
        }
        return arr;
    } else return arr;
    
}