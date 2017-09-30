$(function() {
    var priceCheckboxes = $(".checkbox [type=checkbox][data-price]");
    var checkAll = $(".checkbox [type=checkbox]").first();
    var unCheckAll = $(".checkbox [type=checkbox]").last();
    var submitBtn = $(".btn");
    var payment = 0;

    priceCheckboxes.on("change", function() {
        var tempPayment = 0;
        priceCheckboxes.each(function() {
            if($(this).prop("checked")) tempPayment += parseFloat($(this).attr("data-price"));
        })
        payment = tempPayment;
    })

    checkAll.on("change", function() {
        if($(this).prop("checked")) priceCheckboxes.prop("checked", true).change();
        else priceCheckboxes.prop("checked", false).change();
    })

    unCheckAll.on("change", function() {
        if($(this).prop("checked")) {
            priceCheckboxes.prop("checked", false).change();
            checkAll.prop("checked", false).change();
        }
    })

    submitBtn.on("click", function(e) {
        $("#price").html(payment.toFixed(2)+"zl");
        e.preventDefault();
    })
})