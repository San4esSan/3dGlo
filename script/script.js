window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime();

      let timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24,
        day = Math.floor(timeRemaining / 60 / 60 / 24);

      if (dateStop >= dateNow) {
        return { timeRemaining, hours, minutes, seconds };
      } else {
        return {
          seconds: '00',
          minutes: '00',
          hours: '00',
          day: '00'
        }
      }
    }

    function updateClock() {
      let timer = getTimeRemaining();
      if (timer.hours < 10) {
        timerHours.textContent = '0' + timer.hours;
      }else {
        timerHours.textContent = timer.hours;
      }
      if (timer.minutes < 10) {
        timerMinutes.textContent = '0' + timer.minutes;
      }else {
        timerMinutes.textContent = timer.minutes;
      }
      if (timer.seconds < 10) {
        timerSeconds.textContent = '0' + timer.seconds;
      }else {
        timerSeconds.textContent = timer.seconds;
      }

      if (timer.timeRemaining > 0) {
        // setTimeout(updateClock, 1000);
        setInterval(updateClock, 1000);
      }
    }
    updateClock();
  }
  countTimer('02 march 2021');
});