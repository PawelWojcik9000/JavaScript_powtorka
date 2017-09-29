/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var imgsContainer = document.querySelector(".page-header");
    var images = imgsContainer.getElementsByTagName("img");
    var panel = document.querySelector(".panel");
    var submitBtn = document.querySelector(".btn");
    var formOptions = panel.getElementsByTagName("option");

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        for (var i = 0; i < formOptions.length; i++) {
            if(!formOptions[i].selected) images[i].style.display = "none";
        }
    })

});