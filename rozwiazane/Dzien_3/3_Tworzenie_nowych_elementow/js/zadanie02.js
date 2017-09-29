/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button');
    var menu = document.querySelector('.menu');

    button.addEventListener('click', function() {
        var newListItem = document.createElement('li');
        newListItem.innerHTML = 'Element ' + ++menu.children.length + ' - w chwili dodania było ' + menu.children.length + ' elementów';
        menu.appendChild(newListItem);
    });
});
