/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.nextElementSibling !== null) {
                this.nextElementSibling.classList.toggle('hidden');
            }
        });
    });
});