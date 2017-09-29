/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var first = document.querySelector(".first");
    var second = document.getElementById("second");
    var third = document.querySelector("[data-ex='third']")
    var fourth = document.querySelector(".forth");
    var childCount = Math.floor(third.parentElement.parentElement.lastElementChild.firstElementChild.children.length / 2);

    console.log(first.firstElementChild.lastElementChild.getAttribute("data-answer"));
    console.log(second.parentElement.children[3].getAttribute("data-answer"));
    console.log(third.parentElement.parentElement.lastElementChild.firstElementChild.children[childCount].getAttribute("data-answer"));
    console.log(fourth.parentElement.querySelector("article").querySelectorAll("p")[1].getAttribute("data-answer"));
});