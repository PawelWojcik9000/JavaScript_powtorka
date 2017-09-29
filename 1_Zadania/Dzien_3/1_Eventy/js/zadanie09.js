document.addEventListener("DOMContentLoaded", function () {
    var width = document.getElementById("windowWidth");
    var height = document.getElementById("windowHeight");

    window.addEventListener("resize", function(e) {
        width.innerHTML = window.innerWidth;
        height.innerHTML = window.innerHeight;
    });
});