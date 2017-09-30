$(function() {
    var submitBtn = $(".people").children().eq(2);
    var list = $(".main");

    function setColor(elementToSet) {
        if(elementToSet.data("age") <= 15) elementToSet.css("color", "green");
        else if(elementToSet.data("age") > 15 && elementToSet.data("age") <= 40) elementToSet.css("color", "blue");
        else elementToSet.css("color", "brown");
        return elementToSet;
    }
    
    submitBtn.on("click", function() {
        var addUser = $("#addUser").val();
        var age = $("#age").val();
        var newElement = $("<li>").attr("data-age", age).html(addUser);
        list.append(setColor(newElement));
    })


    // -------------------- zadanie 2 ------------------------
    var whereIAm = $(".where-i-am");

    function whereIAmFunction(element) {
        var span1 = $("<span>").html("Jestem tutaj " + whereIAmFunction.name);
        var span2 = $("<span>").html("Jestem tutaj " + whereIAmFunction.name);
        var span3 = $("<span>").html("Jestem tutaj " + whereIAmFunction.name);
        var span4 = $("<span>").html("Jestem tutaj " + whereIAmFunction.name);
        
        element.find("div").eq(0).before(span1);
        element.find("div").eq(0).after(span2);
        element.find("p").before(span3);
        element.find("p").after(span4);
    }
    whereIAmFunction(whereIAm);
})