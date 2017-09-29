/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    var box = document.getElementsByClassName("box");
    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener("click", function(e) {
            this.style.backgroundColor = randomColor;
        });
        
    }
});