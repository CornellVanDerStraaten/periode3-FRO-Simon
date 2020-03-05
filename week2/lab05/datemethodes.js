let innerYear = document.getElementById('showYear');
let innerMonth = document.getElementById('showMonth');
let innerDay = document.getElementById('showDay');
let innerHour = document.getElementById('showHour');
let innerMinute = document.getElementById('showMinute');

let year = 0;
let month = 0;
let day = 0;
let hour = 0;
let minute = 0;

let date = 0;

function showTime(){
    retrieveTime();
    innerYear.innerHTML = year;
    innerMonth.innerHTML = month + 1;
    innerDay.innerHTML = day;
    innerHour.innerHTML = hour;
    innerMinute.innerHTML = minute;
}

function retrieveTime(){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
}