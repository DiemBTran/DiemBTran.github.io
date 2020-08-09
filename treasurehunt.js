
var rainbow = Math.floor(Math.random() * 9);
var bomb = Math.floor(Math.random() * 9);
while (rainbow === bomb) {
  bomb = Math.floor(Math.random() * 9)
}
console.log(rainbow, bomb);

var count = 0;
const treasure = (location) => {
  var counter = count++
  document.getElementById("counter").innerHTML = "# of clicks: " + count;
  console.log(count);
  if (location == rainbow){
    //WINNING CONDITION!
    document.getElementById(location).innerHTML = "&#x1f308";
    document.getElementById("gameBoard").style.pointerEvents = "none";
    setTimeout(function () {
      alert("You're rich!");
    }, 500);
  }
  //LOSING CONDITION
  else if (location == bomb){
    document.getElementById(location).innerHTML = "&#x2620";
    document.getElementById("gameBoard").style.pointerEvents = "none";
    setTimeout(function () {
      alert("You died!");
    }, 500);
  }
  //NEUTRAL CONDITION
  else {
    document.getElementById(location).innerHTML = "&#x1f332";
    document.getElementById(location).style.pointerEvents = "none";
    if (counter == 5){
      document.getElementById("gameBoard").style.pointerEvents = "none";
      setTimeout(function () {
        alert("You've run out of turns!");
      }, 500);
    }
  }
}
