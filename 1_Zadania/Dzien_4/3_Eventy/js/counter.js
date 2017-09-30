$(function() {
    var textArea = $(".textarea");
    var counterSpan = $(".counter-span");

    textArea.on("keyup", function() {
        if(this.value.length >= 0 && this.value.length <= 33) counterSpan.css("color", "green");
        else if(this.value.length >= 34 && this.value.length <= 66) counterSpan.css("color", "yellow");
        else counterSpan.css("color", "red");
        counterSpan.html(this.value.length);
    })
})