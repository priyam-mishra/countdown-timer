const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newYears = "1 Jan 2022";

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalseconds = (newYearDate - currentDate) / 1000;
    
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
     
    daysE1.innerHTML = days; 
    hoursE1.innerHTML = hours;
    minsE1.innerHTML =  mins;
    secondsE1.innerHTML = seconds;
}

function formatTime(time) {

}


// initial call
countdown();


setInterval(countdown,1000);