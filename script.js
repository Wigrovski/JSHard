'use strict'
// let out_arr = document.getElementById('out_arr')
// let str = ' '

// let week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
// out_arr.innerHTML = week

// for (let i = 0; i < week.length; i++  ) {
//     if (wekk[i] !== undefined) str += i + ' - ' + week[i]+ ' <br> ' ;
//     }
// out_arr.innerHTML = str

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(); // 3 января 2014 года
  alert( getWeekDay(date) ); // ПТ