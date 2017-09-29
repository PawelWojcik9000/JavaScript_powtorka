/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("button");
    var counter = document.getElementsByClassName("counter");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(e) {
            counter[0].innerHTML++;
        });
    }
});