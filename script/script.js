window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime();

      const timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),        
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24,
        day = Math.floor(timeRemaining / 60 / 60 / 24);
        
      if (dateStop >= dateNow) {
        return { timeRemaining, hours, minutes, seconds };
      } else {
        return {
          seconds: '0',
          minutes: '0',
          hours: '0',
          day: '0'
        }
      }
    }
    function updateClock() {
      let timer = getTimeRemaining();
      if (timer.hours < 10) {
        timerHours.textContent = '0' + timer.hours;
      } else {
        timerHours.textContent = timer.hours;
      }
      if (timer.minutes < 10) {
        timerMinutes.textContent = '0' + timer.minutes;
      } else {
        timerMinutes.textContent = timer.minutes;
      }
      if (timer.seconds < 10) {
        timerSeconds.textContent = '0' + timer.seconds;
      } else {
        timerSeconds.textContent = timer.seconds;
      }

    }
    setInterval(updateClock, 1000);
  }
  // countTimer('03 march 2021');
  countTimer('03 march 2021 20:47');

  // menu
  const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

      const handlerMenu = () => {
        menu.classList.toggle('active-menu');
      }

      btnMenu.addEventListener('click', handlerMenu);
      closeBtn.addEventListener('click', handlerMenu);
      menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
toggleMenu();

// popup
const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
   popupBtn = document.querySelectorAll('.popup-btn'),
   popUpClose = document.querySelector('.popup-close'),
   popupContent = document.querySelector('.popup-content');
  let width = document.documentElement.clientWidth;
  
     
   let count = 50;
    let popupDown = () => {
     count++;
     popupContent.style.top = count + 'px';
     if(count < 150){
       setTimeout(popupDown, 5);
      }
    }

    window.addEventListener("resize", function() {
       width = document.documentElement.clientWidth;
      }, false);
     
   popupBtn.forEach((elem) =>  {
     elem.addEventListener('click', () => {
      popup.style.display = 'block';      
      if(width > 768){
        popupDown();
      }else{
        popupContent.style.top = 'none';
      }      
     });
   });

   popUpClose.addEventListener('click', () => {
    popup.style.display = 'none';
    popupContent.style.top = 0;
    count = 50;
   });

};
togglePopUp();
});