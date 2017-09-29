/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addBtn");
    var tableBody = document.querySelector("#orders tbody");

    addButton.addEventListener("click", function() {
        var newRow = document.createElement("tr");
        var textInputs = document.querySelectorAll("[type='text']");

        for (var i = 0; i < textInputs.length; i++) {
            var newCell = document.createElement("td");
            newCell.innerHTML = textInputs[i].value;
            newRow.appendChild(newCell);
        }

        tableBody.appendChild(newRow);
    })
});