var second = 0;
var minute = 0;
var hour = 0;

var siku = new Date();

setInterval(
    function(){
      siku = new Date();
      second = siku.getSeconds() * 6;
      minute = siku.getMinutes() * 6;
      hour = siku.getHours() * 30 + Math.round(minute/12);
      document.getElementById("second-hand").style.transform ="rotate("+ second + "deg)";
      document.getElementById("minute-hand").style.transform ="rotate("+ minute + "deg)"; 
      document.getElementById("hour-hand").style.transform ="rotate("+ hour + "deg)";  
    }, 1000
);