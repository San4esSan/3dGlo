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
        hours = Math.floor((timeRemaining / 60 / 60) % 24),
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
  countTimer('19 march 2021 20:47');

  // menu
  const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu');

      const handlerMenu = () => {
        menu.classList.toggle('active-menu');
      }

      btnMenu.addEventListener('click', (event) => {
        let target = event.target.closest('.menu');
        if(target.classList.contains('menu')){
          handlerMenu();
        }         
      });

      menu.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('close-btn')){
          handlerMenu();
        } 
        if(target.closest('LI')){
          handlerMenu();
        }
      });
  };
  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
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

    popup.addEventListener('click', (event) => {
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popup.style.display = 'none';
        popupContent.style.top = 50;
        count = 50;
      } else {
        target = target.closest('.popup-content');
        if(!target){
          popup.style.display = 'none';
          popupContent.style.top = 50;
          count = 50;
        }
      }      
    });

  };
  togglePopUp();

  // tabs
  const tabs = () =>{
    const tabHeader = document.querySelector('.service-header'),
     tab = tabHeader.querySelectorAll('.service-header-tab'),
     tabContent = document.querySelectorAll('.service-tab');

     const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++){
        if(index === i){
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        }else{
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
     };

     tabHeader.addEventListener('click', (event) =>{
       let target = event.target;
       target = target.closest('.service-header-tab');
        if(target){
          tab.forEach((item, i) => {
           if(item === target){
             toggleTabContent(i);
           }
          });
        }
     });
  };
  tabs();
  
  // slider  
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      slider = document.querySelector('.portfolio-content'),
      ulDot = document.querySelector('.portfolio-dots');
      
    for(let i = 0; i < slide.length; i++){
      let dot = document.createElement('li');
      dot.classList.add('dot');
      ulDot.append(dot);
    }
    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    let currentSlide = 0,
    interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
    
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')){
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      }else if(target.matches('#arrow-left')){
        currentSlide--;
      }else if(target.matches('.dot')){
        dot.forEach((elem, index) => {
          if(elem === target) {
            currentSlide = index;
          }
        });
      }

      if(currentSlide>=slide.length){
        currentSlide = 0;
      }
      
      if(currentSlide < 0){
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) =>{
      if(event.target.matches('.portfolio-btn') || 
      event.target.matches('.dot')){
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) =>{
      if(event.target.matches('.portfolio-btn') || 
      event.target.matches('.dot')){
        startSlide();
      }
    });

    startSlide(2000);
  };
  
  slider();

  // наша команда
  const commandPhoto = document.querySelectorAll('.command__photo');
  for(let i = 0; i < commandPhoto.length; i++){
    let photo = commandPhoto[i].src;
    commandPhoto[i].addEventListener('mouseenter', (event) => {
      event.target.src = event.target.dataset.img;
    });
    commandPhoto[i].addEventListener('mouseleave', (event) => {
      event.target.src = photo;
    });    
  } 
  
  // калькулятор
  const calcItem = document.querySelectorAll('.calc-item');

  for(let i = 1; i < calcItem.length; i++){
    calcItem[i].addEventListener('input', (event) => {
      event.target.value = calcItem[i].value.replace(/\D/g, '');
    });
  }

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
     calcType = document.querySelector('.calc-type'),
     calcSquare = document.querySelector('.calc-square'),
     calcDay = document.querySelector('.calc-day'),
     calcCount = document.querySelector('.calc-count'),
     totalValue = document.getElementById('total');

     const countSum = () => {
       let total = 0,
       countValue = 1,
       dayValue = 1;
       const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if(calcCount.value > 1){
        countValue += (calcCount.value - 1) / 10;
      }

      if(calcDay.value && calcDay.value < 5){
        dayValue *= 2;
      }else if(calcDay.value && calcDay.value < 10){
        dayValue *= 1.5;
      }

      if(typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }
      
      totalValue.textContent = Math.round(total);
      // totalValue.textContent = total;
     };

     calcBlock.addEventListener('change', (event) => {
       const target = event.target;
      
      if(target.matches('select') || target.matches('input')){
        countSum();
      }

    });

  };
  calc(100);

  // остались вопросы
  const form2Name = document.querySelector('#form2-name');
  const form2Message = document.querySelector('#form2-message');
  const form2Email = document.querySelector('#form2-email');
  const form2Phone = document.querySelector('#form2-phone');

  form2Name.addEventListener('input', () => {
    form2Name.value = form2Name.value.replace(/[^а-я\s-]/ig, '');
    form2Name.addEventListener('blur', () =>{
      form2Name.value = form2Name.value.charAt(0).toUpperCase() + form2Name.value.toLowerCase().slice(1);
      form2Name.value = form2Name.value.replace(/ +/g, '-').trim();
    }, true);
  });

  form2Message.addEventListener('input', () => {
    form2Message.value = form2Message.value.replace(/[^а-я\s-]/ig, '');
    form2Name.addEventListener('blur', () =>{
      form2Message.value = form2Message.value.charAt(0).toUpperCase() + form2Message.value.toLowerCase().slice(1);
      form2Message.value = form2Message.value.replace(/ +/g, ' ').trim();
    }, true);
    
  });

  form2Email.addEventListener('input', () => {
    form2Email.value = form2Email.value.replace(/[^a-z.@\-_*'!~]/ig, '');
    // form2Email.value = form2Email.value.replace(/[^[a-z._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$]/i, '');
    form2Email.addEventListener('blur', () =>{
      form2Email.value = form2Email.value.toLowerCase().replace(/ +/g, '').trim();
    }, true);
  });

  form2Phone.addEventListener('input', () => {
    form2Phone.value = form2Phone.value.replace(/[^(\+7|8)\-(\(\d{3}\)|\d{3})\d{7}$]/, '');
    form2Phone.addEventListener('blur', () =>{
      form2Phone.value = form2Phone.value.replace(/ +/g, '').trim();
    }, true);
  });






});