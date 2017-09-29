// ------------------------------ ZADANIE 1 ------------------------------------------------
String.prototype.upperLower = function() {
    var originalStr = this.toString();
    var newStr = "";

    for (var i = 0; i < originalStr.length; i++) {
        if(this.charAt(i) != " ") {
            if(i % 2 != 0) newStr += this.charAt(i).toUpperCase();
            else newStr += this.charAt(i).toLowerCase();
        } else newStr += " ";
    }
    return newStr;
}

var randomText = "jakis losowy tekst nie chce mi sie zagladac na lorem ipsum".upperLower();
console.log(randomText);


// ------------------------------ ZADANIE 2 i 3 --------------------------------------------

var Car = function(carType, carColor) {
    this.type = carType;
    this.color = carColor;
    this.km = 0;
}

Car.prototype.addServiceDate = function(array) {
    this.serviceDate = array;
}
Car.prototype.printServiceDate = function() {
    for (var i = 0; i < this.serviceDate.length; i++) {
        console.log(this.serviceDate[i]);
    }
}

Car.prototype.drive = function(km) {
    this.km += km;
}

Car.prototype.printCarInfo = function() {
    console.log(this.color + " " + this.type + " drives for " + this.km + "km");
}

var mazda = new Car("mazda", "red");
mazda.drive(120);
mazda.printCarInfo();

var serviceArray = ["12.12.2012", "12.12.2013", "12.12.2014"];
mazda.addServiceDate(serviceArray);
mazda.printServiceDate();


// ----------------------------------- ZADANIE 5 -----------------------------------------------

var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function() {
    return (this.width*this.height);
}
Rectangle.prototype.getPerimeter = function() {
    return ((2*this.width)+(2*this.height));    
}

var foo = new Rectangle(2,4);
console.log(foo.getArea());
console.log(foo.getPerimeter());

var bar = new Rectangle(23,43);
console.log(bar.getArea());
console.log(bar.getPerimeter());


// ---------------------------------- ZADANIE 6 ------------------------------------------------

var Calculator = function() {
    this.histArray = [];
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1+num2;
    var histStr = "added "+num1+" to "+num2+" got "+result;
    this.histArray.push(histStr);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1*num2;
    var histStr = "multiplied "+num1+" with "+num2+" got "+result;
    this.histArray.push(histStr);
    return result;
}

Calculator.prototype.subtract = function(num1, num2) {
    var result = num1-num2;
    var histStr = "subtracted "+num1+" from "+num2+" got "+result;
    this.histArray.push(histStr);
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    var result = num1/num2;
    var histStr = "divided "+num1+" by "+num2+" got "+result;
    this.histArray.push(histStr);
    return result;
}

Calculator.prototype.printOperations = function() {
    console.log(this.histArray);
}

Calculator.prototype.clearOperations = function() {
    this.histArray = [];
}

var calc1 = new Calculator();
calc1.add(2,4);
calc1.divide(10,5);
calc1.multiply(12,3);
calc1.printOperations();
calc1.clearOperations();
calc1.divide(3,2);
calc1.printOperations();