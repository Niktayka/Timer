window.addEventListener('DOMContentLoaded', function() {
'use strict';

    let dedline = '2019-10-21';

    function getTimeRemaining(endtime) {

        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60 ),
        minutes = Math.floor((t/1000/60) % 60 ),
        hours = Math.floor((t/(1000*60*60)));   
        
        return{
            'total' : t,
            "hours" : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }    
    }

    setClock('timer', dedline);
});