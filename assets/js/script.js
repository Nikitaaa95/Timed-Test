var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 1;

  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time Remaining:" + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendcomplete();
      }
  
    }, 1000);
  }
  function sendcomplete() {
    timeEl.textContent = " ";
    var endalert = document.createElement("p");
    endalert.setAttribute =""
    endalert.innerHTML += 'Times Up! Please refresh page and try again.';
    mainEl.appendChild(endalert);
  
  }
  setTime();
//Header Items
/// View HighScores link
//// Display top 10 scores
/// See the timer countdown

//Body Items
///Include starter language
////Add starter button - Prompt questions
///Correct/Incorrect Indicator
///Final Score - Include initials