
var min =0;
var sec =0;
var miliSec =0;
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMiliSec = document.getElementById("displayMiliSec");

var interval;

function timer(){
   miliSec++;
   if(miliSec == 10){
   miliSec = 0;
   sec ++;
}
   if (sec == 60){
    sec = 0;
    min++;
   }
     
   displayMiliSec.innerHTML = miliSec;
   displayMin.innerHTML = min;
   displaySec.innerHTML = sec;
};

function startTimer(){
    interval = setInterval(function(){  
   timer();
},100);

};

function pauseTimer(){
    clearInterval(interval);
}
function resetTimer(){
    pauseTimer();
    min = 0;
    sec = 0;
    miliSec = 0;
    displayMiliSec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
  
}

var hours = 0;
var minutes = 0;
var seconds = 1;

var totalSeconds =
hours * 60 * 60 + minutes * 60 + seconds;
var tempSeconds = totalSeconds;

const convert = (value, inSeconds) => {
if (value > inSeconds) {
    var x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

const setSeconds = (s) => {
document.querySelector("#seconds").textContent = s + "S";
};

const setMinutes = (m) => {
document.querySelector("#minutes").textContent = m + "M";
};

const setHours = (h) => {
document.querySelector("#hours").textContent = h + "H";
};


var x = setInterval(() => {
if (totalSeconds <= 0) {
    clearInterval(x);
}
setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
totalSeconds++;
tempSeconds = totalSeconds;
}, 1000);