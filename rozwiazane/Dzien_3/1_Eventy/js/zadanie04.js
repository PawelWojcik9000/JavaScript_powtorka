/**
 * Created by Jacek on 2016-01-12.
 */

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

function clickFn(e) {
    debugger;
    var counter = e.target.nextElementSibling.querySelector('.counter');
    counter.innerHTML++;
}

button1.addEventListener('click', clickFn);
button2.addEventListener('click', clickFn);
button3.addEventListener('click', clickFn);
