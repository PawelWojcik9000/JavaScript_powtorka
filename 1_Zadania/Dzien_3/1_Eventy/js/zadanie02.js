/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("bubblingButtons");
    console.log(button.children[1]);
    function clickBtn(event) {
        if(event.target.dataset.counter) event.target.dataset.counter++;
    }
    document.addEventListener("click", clickBtn);
    
});