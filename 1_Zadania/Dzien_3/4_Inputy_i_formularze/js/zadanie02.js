/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("invoice");
    console.log(checkbox.checked);
    var invoice = document.getElementById("invoiceData");
    checkbox.addEventListener("click", function() {
        if(!checkbox.checked) invoice.style.display = "none";
        else invoice.style.display = "block";
    })
    
});