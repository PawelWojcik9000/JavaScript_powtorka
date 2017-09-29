/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    // console.log(homeElement, typeof homeElement);
    // console.log(childElements, typeof childElements);
    // console.log(banner, typeof banner);
    // console.log(blocks, typeof blocks);
    // console.log(links, typeof links);

    // function logElement(element) {
    //     console.log(element, typeof element);
    // }

    // for (i = 0; i < childElements.length; i++) {
    //     logElement(childElements[i]);
    // }

    // blocks.forEach(logElement);

    // blocks.forEach(function(element) {
    //     console.log(element.innerHTML, element.outerHTML);
    // });

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
    }

    // for (i = 0; i < links.length; i++) {
    //     logElement(links[i]);
    // }

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    var homeElementClass = homeElement.className;
    var homeElementID = homeElement.id;

    // console.log("homeElementClass", homeElementClass);
    // console.log("homeElementID", homeElementID);

    // console.log("homeElement przed zamiana", homeElement);

    homeElement.addEventListener("click", function() {
        homeElement.className = homeElementID;
        homeElement.id = homeElementClass;
        console.log("homeElement po zamianie", homeElement);
    });

    // setInterval(function() {
    //     console.log(document.getElementById('home'));
    // }, 500);
});
