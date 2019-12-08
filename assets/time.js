var body = document.querySelector("body");
var light = document.getElementById("light");


var today = new Date();
var time = today.getHours();
console.log(time)

if (time >= 0 && time <= 7 || time >= 17 && time <= 24) {
    body.style.backgroundColor = "black";
  } else if (time >= 8 && time <= 16) {
    body.style.backgroundColor = "#CCDAE5";
    light.style.opacity = "0.6";
  }