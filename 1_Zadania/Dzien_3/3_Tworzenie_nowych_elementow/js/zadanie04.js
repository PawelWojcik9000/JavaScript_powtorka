/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("remove");
    var list = document.querySelector(".list");

    button.addEventListener("click", function() {
        while(list.firstChild) list.removeChild(list.firstChild);
    })
});