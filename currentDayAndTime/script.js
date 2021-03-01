// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время:12:05:15 PM
// До нового года осталось 175 дней


'use strict';

let date = new Date();

let hour = date.getHours()

if (hour >= 5 && hour < 12) {
  console.log("Доброе утро");
}
if (hour >= 12 && hour < 18) {
  console.log("Добрый день");
}
if (hour >= 18 && hour < 24) {
  console.log("Добрый вечер");
}
if (hour >= 0 && hour < 5) {
  console.log("Доброй ночи");
}

const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

const res = ((new Date(2022, 0, 1, 0, 0) - date) / 1000) / (60 * 60 * 24);

const i = date.getDay();

console.log('Сегодня: ' + days[i]);

// console.log('Текущее время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
if (date.getHours() < 12) {
  console.log('Текущее время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' AM');
}else{
  console.log('Текущее время: ' + (date.getHours() - 12) + ':' + date.getMinutes() + ':' + date.getSeconds() + ' PM') ;
}
console.log('До нового года осталось ' + Math.floor(res) + ' дней');


