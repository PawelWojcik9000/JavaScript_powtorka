/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var addBtn = document.getElementById('addBtn');
    var ordersTableBody = document.querySelector('#orders tbody');

    addBtn.addEventListener('click', function() {
        var newRow = document.createElement('tr');

        var textInputs = document.querySelectorAll('[type=text]');

        for (i = 0; i < textInputs.length; i++) {
            var newCell = document.createElement('td');
            newCell.innerHTML = textInputs[i].value;
            newRow.appendChild(newCell);
        }

        ordersTableBody.appendChild(newRow);

        for (i = 0; i < textInputs.length; i++) {
            textInputs[i].value = '';
        }
    });
});
