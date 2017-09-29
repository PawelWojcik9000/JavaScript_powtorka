/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    var ex1 = document.querySelectorAll(".ex1 li");
    for (var i = 0; i < ex1.length; i++) {
        if(!ex1[i].dataset.direction) ex1[i].dataset.direction = "up";
        if(i % 2 != 0) ex1[i].style.backgroundColor = "green";
        if((i+1) % 3 == 0) ex1[i].style.textDecoration = "line-through";
    }
    ex1[4].className = "big";


    // ---------------- zadanie 2 -------------------
    var ex2 = document.querySelectorAll(".ex2 option");
    for (var i = 0; i < ex2.length; i++) {
        ex2[i].innerHTML = ex2[i].getAttribute("value");
        ex2[i].dataset.year = parseInt(ex2[i].getAttribute("value"), 10)+20;
    }


    // ---------------- zadanie 3 -------------------
    var browsers = document.querySelectorAll(".ex3 > div");
    for (var i = 0; i < browsers.length; i++) {
        browsers[i].children[1].style.backgroundImage = 'url("assets/img/'+browsers[i].children[1].className+'.png")';
    }
    browsers[0].children[2].setAttribute("href", "https://www.chrome.com");
    browsers[0].children[2].innerHTML = "Chrome";
    browsers[0].children[1].style.width = "100px";
    browsers[1].children[2].setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    browsers[2].children[2].setAttribute("href", "https://www.mozilla.org");
    browsers[2].children[2].innerHTML = "Firefox";


    // ----------------- zadanie 4 ------------------
    var name = document.getElementById("name");
    var fav_color = document.getElementById("fav_color");
    var fav_meal = document.getElementById("fav_meal");
    name.innerHTML = "Zenek";
    fav_color.innerHTML = "Blue";
    fav_meal.innerHTML = "Stejki";


    // ----------------- zadanie 5 ------------------
    var ul = document.querySelector(".ex5 ul");
    ul.className = "menu";
    var li = document.querySelectorAll(".ex5 li");
    for (var i = 0; i < li.length; i++) {
        li[i].classList.add("menuElement");
        li[i].classList.remove("error");
    }


    // ----------------- zadanie 6 ------------------
    var ex6 = document.querySelectorAll(".ex6 li");
    for (var i = 0; i < ex6.length; i++) {
        ex6[i].dataset.id = "";
        ex6[i].setAttribute("id_2", "");
    }
});
