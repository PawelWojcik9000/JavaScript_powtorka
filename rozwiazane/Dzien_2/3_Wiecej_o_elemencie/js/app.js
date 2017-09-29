/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {

    // ------- Zadanie 1

    var listItemArray = document.querySelectorAll(".ex1 li");
    console.log(listItemArray);

    for (i = 0; i < listItemArray.length; i++) {
        if (!listItemArray[i].dataset.direction) {
            listItemArray[i].dataset.direction = "up";
        }
        if (i % 2 !== 0) {
            listItemArray[i].style.backgroundColor = "green";
        }
        if ((i+1) % 3 === 0) {
            listItemArray[i].style.textDecoration = "line-through";
        }
    }

    listItemArray[4].classList.add("big");

    // --------- Zadanie 2

    var allOptions = document.querySelectorAll(".ex2 [name=birthYear] option");

    for (i = 0; i < allOptions.length; i++) {
        if (allOptions[i].hasAttribute("value")) {
            allOptions[i].innerHTML = allOptions[i].getAttribute("value");
            allOptions[i].dataset.year = parseInt(allOptions[i].getAttribute("value")) + 20;
        }
    }
    
    // --------- Zadanie 3

    var allBrowsers = document.querySelectorAll(".ex3 > div");
    console.log(allBrowsers);

    for (i = 0; i < allBrowsers.length; i++) {
        allBrowsers[i].children[1].style.backgroundImage = 'url("assets/img/' + allBrowsers[i].children[1].className + '.png")';
    }

    allBrowsers[0].children[2].innerHTML = "Chrome";
    allBrowsers[1].children[2].setAttribute("href", "https://www.microsoft.com/en-us/windows/microsoft-edge");
    allBrowsers[2].children[2].innerHTML = "Firefox";
    allBrowsers[2].children[2].setAttribute("href", "https://www.mozilla.org/en-US/firefox/new/");

    allBrowsers[0].children[1].style.width = "100px";
});
