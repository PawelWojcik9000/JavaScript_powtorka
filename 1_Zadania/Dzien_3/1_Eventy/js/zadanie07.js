/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById("box");
    var globalX = document.getElementById("globalX");
    var globalY = document.getElementById("globalY");
    var localX = document.getElementById("localX");
    var localY = document.getElementById("localY");

    box.addEventListener("click", function(e) {
        globalX.innerHTML = e.screenX;
        globalY.innerHTML = e.screenY;
        localX.innerHTML = e.clientX;
        localY.innerHTML = e.clientY;
    });
});