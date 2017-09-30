document.addEventListener("DOMContentLoaded", function() {
    var link1 = document.getElementsByTagName("a")[0];
    var link2 = document.getElementsByTagName("a")[1];
    var article1 = document.getElementsByClassName("content")[0];
    var article2 = document.getElementsByClassName("content")[1];

    link1.addEventListener("click", function() {
        if (article1.style.display === 'block') {
            article1.style.display = 'none';
        } else {
            article1.style.display = 'block';
        }
    })
    link2.addEventListener("mouseover", function() {
        if (article2.style.display === 'block') {
            article2.style.display = 'none';
        } else {
            article2.style.display = 'block';
        }
    })
});