/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");

    var onClick1;
    var onClick2 = function() {
        list1.appendChild(this);
        this.onclick = onClick1;
    };
    onClick1 = function() {
        list2.appendChild(this);
        this.onclick = onClick2
    };

    for (var i = 0; i < list1.getElementsByTagName("li").length; i++) {
        list1.getElementsByTagName("li")[i].onclick = onClick1;
    }
    for (var i = 0; i < list2.getElementsByTagName("li").length; i++) {
        list2.getElementsByTagName("li")[i].onclick = onClick2;
    }

});