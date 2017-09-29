/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".button");
    var menu = document.querySelector(".menu");

    button.addEventListener("click", function() {
        var newListElement = document.createElement("li");

        for (var i = 0; i <= menu.children.length; i++) {
            newListElement.innerHTML = "Element "+i+" - w chwili dodania było "+(i-1)+" elementów";
            menu.appendChild(newListElement);
        }
    })
});