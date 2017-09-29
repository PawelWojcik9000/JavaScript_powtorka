/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var panel = document.querySelector(".panel-body");
    var inputs = panel.getElementsByTagName("input");
    var submitBtn = document.querySelector(".btn");
    var payment = 0;
    var finalPayment = document.getElementById("price");
    var form = document.getElementsByTagName("form");

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        
        if(inputs[0].checked) {
            payment = 18.30;
        } else {
            for (var i = 1; i < inputs.length-1; i++) {
                var price = inputs[i].getAttribute("data-price");
                if(inputs[i].checked) payment += parseFloat(price);
                console.log(payment.toFixed(2));
            }
        }
        
        if(inputs[inputs.length-1].checked) {
            form[0].reset();
            payment = 0;
        }
        finalPayment.innerHTML = payment.toFixed(2)+"zl";
        payment = 0;
    })
});