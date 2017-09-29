
$(function() {
    // ----------------- zadanie 1 i 2 ----------------
    $(".main").find("li").addClass("borderClass");
    var showMoreElements = $(".showMore");
    showMoreElements.eq(0).css("color", "red");

    // ----------------- zadanie 3 --------------------
    $(".main").find("li").addClass("colorText");
    $(".main").find("li").addClass("backgroundElement");
    $(".main").find("li").fadeOut(1000);
    $(".main").find("li").fadeIn(1000);

    // ----------------- zadanie 4 --------------------
    var links = $(".menu").find("a");
    links.each(function (index, element) {
        $(this).addClass("redLinks");
    })
    links.eq(0).addClass("biggerElement");

    // ----------------- zadanie 5 --------------------
    if($("h1").hasClass("CreepyHeader")) console.log("h1 ma juz klase creepyHeader");
    else $("h1").addClass("creepyHeader");
})

