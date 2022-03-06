"use strict";

const date = new Date("2021-01-01");
console.log(date);
// const day = date.getDate();
// const week = parseInt((date.getDate() + date.getDay()) / 7);

// console.log(date.getDate());
console.log(date.getDay());
// console.log(week);

function getDayInfo(dateString) {
  const arr = dateString.split("-");
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Майя",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  const date = new Date(dateString);
  let day = date.getDay();
  let dayOfWeek;
  const week = parseInt((date.getDate() + date.getDay()) / 7);
  //   const month = months[1];
  let month = months[date.getMonth()];
  const year = date.getFullYear();

  switch (day) {
    case 1:
      dayOfWeek = "Понедельник";
      break;
    case 2:
      dayOfWeek = "Вторник";
      break;
    case 3:
      dayOfWeek = "Среда";
      break;
    case 4:
      dayOfWeek = "Четверг";
      break;
    case 5:
      dayOfWeek = "Пятница";
      break;
    case 6:
      dayOfWeek = "Суббота";
      break;
    case 7:
      dayOfWeek = "Воскресенье";
      break;
  }
  console.log(`${dayOfWeek}, ${week} неделя ${month} ${year} года`);
  console.log(arr);
}

getDayInfo("2022-01-01");

// Необходимо разработать функцию getDayInfo(date), которая возвращает информацию о
// выбранной дате.
// Результатом функции должен быть форматированный текст:
// <день недели>, <номер недели> неделя <месяц> <год> года
// Пример:
// getDayInfo(“01.01.2022”) // =&gt; Суббота, 1 неделя Января 2022 года
// getDayInfo(“15.12.2021”) // =&gt; Среда, 3 неделя Декабря 2021 года
