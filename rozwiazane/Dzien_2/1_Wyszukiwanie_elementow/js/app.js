document.addEventListener("DOMContentLoaded", function () {
    var firstArticlesArray = document.querySelectorAll("article.first");

    var h1sInFirstArticle = firstArticlesArray[0].getElementsByTagName("h1");
    console.log(h1sInFirstArticle.length);

    var offersInFirstArticle = firstArticlesArray[0].getElementsByClassName("oferts");

    for (var i = 0; i < offersInFirstArticle.length; i++) {
        console.log(offersInFirstArticle[i]);
    }
    
    var divsInFirstArticle = firstArticlesArray[0].getElementsByTagName("div");

    for (var i = 0; i < divsInFirstArticle.length; i++) {
        console.log(divsInFirstArticle[i]);
    }

    // -------- Zadanie 2

    var exercise2 = document.querySelector("nav ul li:nth-child(5) a");
    console.log("exercise2", exercise2);
});