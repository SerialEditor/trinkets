'use strict';
let timeLeft = document.querySelector('.time_left');
let time = 10;
for (let i = 0; i < time; i++) {
    setTimeout(function() {let x = 60 * (i + 1); timeLeft.style.setProperty('--set-transform', 'rotate(' + x + 'deg)'); timeLeft.textContent = ++i;}, 1000 * (i + 1));
    
    setTimeout(function() {timeLeft.textContent = 'End';}, 1000 * (time + 1));
}
 


