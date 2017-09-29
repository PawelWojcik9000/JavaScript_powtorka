/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("mainBtn");
    function clickBtn(e) {
        console.log("dziala");
    }
    document.addEventListener("click", clickBtn);
});