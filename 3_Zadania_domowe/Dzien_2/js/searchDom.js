// ------------- zadanie 1 -----------------------------
var menu = document.getElementById("menu");
console.log(menu.children.length);

function getDataInfo(element) {
    var arr = [];
    for (var i = 0; i < element.children.length; i++) {
        arr.push(element.children[i]);
    }
    return arr;
}
console.log(getDataInfo(menu));


// -------------- zadanie 2 ------------------------------
var mainContainer = document.getElementById("main-contener");
var classNames = mainContainer.children;

function getElementClass(element) {
    var arr = [];
    for (var i = 0; i < element.length; i++) {
        arr.push(element[i].className);
    }
    return arr;
}
console.log(getElementClass(classNames));


// ---------------- zadanie 3 ----------------------------
var pinkColorElement = document.getElementsByClassName("pink-color");

function getElementText(element) {
    return element[0].innerText;
}
console.log(getElementText(pinkColorElement));


// ------------------- zadanie 4 --------------------------
var images = document.getElementsByClassName("images");

function getElementAlt(element) {
    var arr = [];
    for (var i = 0; i < element.length; i++) {
        arr.push(element[i]);
    }
    return arr;
}
console.log(getElementAlt(images));


// --------------------- zadanie 5 ------------------------
var myLinks = document.getElementsByClassName("my-link");

function getElementHref(element) {
    var arr = [];
    for (var i = 0; i < element.length; i++) {
        arr.push(element[i].getAttribute("href"));
    }
    return arr;
}
console.log(getElementAlt(myLinks));