/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // ------------- zadanie 1 -------------------------
    console.log(homeElement.className, homeElement.id);
    var tempId = homeElement.id;
    homeElement.id = homeElement.className;
    homeElement.className = tempId;
    console.log(homeElement.className, homeElement.id);


    // -------------- zadanie 2 ------------------------
    console.log("zadanie 2 \n", homeElement, typeof(homeElement));
    console.log(banner, typeof(banner));
    for (var i = 0; i < childElements.length; i++) {
        console.log(childElements[i], typeof(childElements));
    }
    for (var i = 0; i < links.length; i++) {
        console.log(links[i], typeof(links));
    }
    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i], typeof(blocks));
    }


    // --------------- zadanie 3 -----------------------
    console.log("zadanie 3")
    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML = "Nowa wartość diva o klasie blocks");
    }
    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i].outerHTML);
    }


    // ------------------ zadanie 4 -------------------
    console.log("zadanie 4 \n",homeElement.id);


    // ------------------ zadanie 5 -------------------
    console.log("zadanie 5");
    for (var i = 0; i < childElements.length; i++) {
        console.log(childElements[i].tagName);
    }


    // ------------------- zadanie 6 -----------------
    console.log("zadanie 6");
    for (var i = 0; i < links.length; i++) {
        console.log(links[i].dataset);
    }


    // ------------------ zadanie 7 ------------------
    console.log("zadanie 7");
    console.log(banner.classList, banner.className);
    console.log(typeof(banner.classList), typeof(banner.className));
});
