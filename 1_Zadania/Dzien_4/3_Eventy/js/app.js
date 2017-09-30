$(function() {
    // ------------------------ zadanie 1 -----------------------------------
    var firstButton = $(".ironMan-btn");
    var secondButton = $(".thor-btn");
    var thirdButton = $(".wolverine-btn");

    firstButton.on("click", function() {
        console.log("kliknieto mnie");
    })
    secondButton.one("click", function() {
        console.log("kliknieto mnie raz, drugi raz sie nie dam kliknac");
    })
    thirdButton.on("click", function() {
        firstButton.off("click");
        secondButton.off("click");
        thirdButton.off("click");
    })


    // ---------------------- zadanie 3 --------------------------------------
    var ddSuperheroDescription = $(".superhero-description").find("dd");
    var dtSuperheroDescription = $(".superhero-description").find("dt");

    ddSuperheroDescription.css("display", "none");
    dtSuperheroDescription.on("click", function() {
        ddSuperheroDescription.toggle();
    })


    // ---------------------- zadanie 4 ---------------------------------------
    var showHideButton = $(".show-hide-btn");
    var password = $(".user-pass");

    showHideButton.on("click", function() {
        console.log("dzialam");
        if(password.attr("type") === "password") password.attr("type", "text");
        else password.attr("type", "password");
        return false;
    })


    // ---------------------- zadanie 5 --------------------------------------
    var menu = $(".menu").find("a");

    menu.on("mouseenter", function() {
        console.log("hurra");
    })


    // --------------------- zadanie 6 ---------------------------------------
    var userName = $(".user-name");

    userName.on("focus", function() {
        userName.css("box-shadow", " 0px 0px 5px 0px rgba(0,0,0,0.75)");
    })
    userName.on("blur", function() {
        userName.css("background-color", "grey");
    })
})