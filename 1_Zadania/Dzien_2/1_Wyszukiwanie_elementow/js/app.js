//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    var tag = document.querySelectorAll("article.first");
    var h1s = tag[0].getElementsByTagName("h1");
    console.log(h1s.length);
    var offers = tag[0].getElementsByClassName("oferts");
    for (var i = 0; i < offers.length; i++) {
        console.log(offers[i]);
    }
    var divs = tag[0].getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        console.log(divs[0]);
    }


    // ------------- zadanie 2 -------------------------------

    var ex2 = document.querySelector("nav ul li:nth-child(5) a");
    console.log(ex2);


    // ----------------------- zadanie 3 ---------------------

    var home1 = document.getElementById("home");
    console.log(home1);
    var home2 = document.querySelectorAll("header");
    console.log(home2[0]);
    var li = document.querySelectorAll("li:not([data-direction])");
    console.log(li[0]);
    var block = document.querySelectorAll(".block");
    console.log(block[0]);


    // ------------------ zadanie 4 --------------------------

    var navlis = document.querySelectorAll("nav li");
    console.log(navlis.length);
    console.log(navlis);

    var divps = document.querySelectorAll("div p");
    console.log(divps.length);
    console.log(divps);

    var articledivs = document.querySelectorAll("article div");
    console.log(articledivs.length);
    console.log(articledivs);


    // -------------------- zadanie 5 dodatkowe ---------------

    var navlis = document.querySelectorAll("nav li:not([data-direction])");
    for (var i = 0; i < navlis.length; i++) {
        navlis[i].setAttribute("data-direction", "top");
    }
});