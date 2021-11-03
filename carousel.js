'use strict';
let carousel = document.querySelector('.carousel');
let angle = 0;
function ready() {
           angle += 360; 
           carousel.style.transform = 'rotate(' + angle + 'deg)';
}
let firstRotation;
window.onload = function() {
        ready();
        firstRotation = setInterval(ready, 4000);
}
window.onfocus = function() {
        ready();
        firstRotation = setInterval(ready, 4000);
        if (!(carousel.hasAttribute('title'))) {
                carousel.setAttribute('title', 'click to stop');
        }   
}
window.onblur = function() {
        clearInterval(firstRotation);
}
carousel.onclick = function () {
        clearInterval(firstRotation);
        carousel.removeAttribute('title');
}
