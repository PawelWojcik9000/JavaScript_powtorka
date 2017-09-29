$(function() {
    // ---------------- zadanie 1 --------------------
    var spanTask1 = $("[data-task='_task1']");
    console.log(spanTask1);
    console.log(spanTask1.siblings("p"));
    console.log(spanTask1.closest("section"));
    console.log(spanTask1.next());
    
    var containers = $(".container");
    containers.each(function(index, element) {
        $(this).css("background-color", "green");
        $(this).addClass("answerTask1");
        $(this).slideUp(4000);
    })

    
    // ----------------- zadanie 2 -------------------
    var spanTask2 = $("[data-task='_task2']");
    console.log(spanTask2);
    console.log(spanTask2.closest("section").prev().children().eq(2).find("button").closest(".cart-item").addClass("cart-updated"));
});
