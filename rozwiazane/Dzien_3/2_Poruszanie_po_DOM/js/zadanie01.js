/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var listContainers = document.querySelectorAll('.listContainer');
    
    for (i = 0; i < listContainers.length; i++) {
        listContainers[i].addEventListener('mouseover', function() {
            this.classList.add('hovered');
            
            var list = this.querySelector('.list');
            list.firstElementChild.style.backgroundColor = 'red';
            list.lastElementChild.style.backgroundColor = 'blue';

            for (j = 1; j < list.children.length - 1; j++) {
                list.children[j].style.backgroundColor = 'green';
            }
        });
    }
});
