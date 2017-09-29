/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function () {
    var bubblingButtons = document.getElementById('bubblingButtons');

    function clickFn(e) {
        if (e.target.dataset.counter) {
            e.target.dataset.counter++;
        }
    }

    bubblingButtons.addEventListener('click', clickFn);

});