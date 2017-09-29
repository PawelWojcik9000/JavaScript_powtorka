/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var table = document.querySelector("#orders tbody");
    var deleteBtn = table.querySelectorAll(".deleteBtn");

    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function() {
            this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
        })
    }

    
});