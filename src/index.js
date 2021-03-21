 'use strict';

import countTimer from './modules/countTimmer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import calc from './modules/calc';
import toForm from './modules/toForm';
import sendForm from './modules/sendForm';
  
  // Timer
  countTimer('23 march 2021 20:47');
  // menu
  toggleMenu();
  // popup
  togglePopUp();
  // tabs
  tabs();
  // slider  
  slider();
  // наша команда
  ourTeam();
  // калькулятор
  calc(100);
  // остались вопросы
  toForm();
  // send-ajax-form
  sendForm();