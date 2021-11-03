'use strict';
let circle = document.querySelector('.circle');
let secondAngle = 0;
let run = false;
function runCircle() {
    secondAngle++; 
    circle.style.transform = 'rotate(' + secondAngle + 'deg)';
}
let turnRepeat;
circle.onclick = function() {
    if (!run) {
        runCircle(); 
        turnRepeat = setInterval(runCircle, 5);
        run = true;
    } else { 
        clearInterval(turnRepeat);
        run = false;
    }
}



