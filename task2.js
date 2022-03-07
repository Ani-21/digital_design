"use strict";

/*
Необходимо разработать функцию getDayInfo(date), которая возвращает информацию о
выбранной дате.
Результатом функции должен быть форматированный текст:
<день недели>, <номер недели> неделя <месяц> <год> года
Пример:
getDayInfo(“01.01.2022”) //  Суббота, 1 неделя Января 2022 года
getDayInfo(“15.12.2021”) //  Среда, 3 неделя Декабря 2021 года
*/

function getDayInfo(dateString) {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const newDateString = dateString.split(".").reverse().join("-");
  const date = new Date(newDateString);
  let day = date.getDay();
  let dayOfWeek;
  let week = parseInt((date.getDate() + date.getDay()) / 7 + 1);
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  switch (day) {
    case 0:
      dayOfWeek = "Воскресенье";
      break;
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
  }
  console.log(`${dayOfWeek}, ${week} неделя ${month} ${year} года`);
}

getDayInfo("07.03.2022");
