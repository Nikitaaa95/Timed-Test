var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");
var testbodyEl = document.getElementById("testbody");
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var scorealertEl = document.getElementById("scorealert")


var secondsLeft = 10;
var currentscore = 0;





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
    endalert.setAttribute("class","alert");
    endalert.setAttribute("style","text-align:right")
    endalert.innerHTML += 'Times Up! Please refresh page and try again.';
    mainEl.appendChild(endalert);   
    testbodyEl.remove(); 
  }
  setTime();

  var quizstarter = document.querySelector("#startquiz");
  quizstarter.addEventListener("click", function() {
    var desEl = document.getElementById("quizsum");
    desEl.remove();
    var question1 = document.createElement("h2");
    question1.textContent = "1) Commonly used data types DO NOT include:";
    questionsEl.appendChild(question1);
    var answers1 = document.createElement("ul");
    answersEl.appendChild(answers1);
    var answersopta1 = document.createElement("li");
    answersopta1.setAttribute("id", "a1")
    answersopta1.textContent = "a. strings";
    answersEl.appendChild(answersopta1)
    var answersoptb1 = document.createElement("li");
    answersoptb1.setAttribute("id", "b1")
    answersoptb1.textContent = "b. booleans";
    answersEl.appendChild(answersoptb1)
    var answersoptc1 = document.createElement("li");
    answersopta1.setAttribute("id", "c1")
    answersoptc1.textContent = "c. alerts";
    answersEl.appendChild(answersoptc1)
    var answersoptd1 = document.createElement("li");
    answersopta1.setAttribute("id", "d1")
    answersoptd1.textContent = "d. numbers";
    answersEl.appendChild(answersoptd1);

    var currentscoreEl = document.createElement("h3");
currentscoreEl.textContent = "Current Score:" + currentscore;
currentscoreEl.setAttribute("style", "text-align:right");
scorealertEl.appendChild(currentscoreEl); 
  })

// var trueEl = document.querySelector("#a1 #b1 #d1")
// trueEl.addEventListener("click", function () {
// currentscore++
// scorealertEl.innerHTML("Correct!")
// })
// var falseEL = document.querySelector(".false")
  
//Header Items
/// View HighScores link
//// Display top 10 scores
/// See the timer countdown

//Body Items
///Include starter language
////Add starter button - Prompt questions
///Correct/Incorrect Indicator
///Final Score - Include initials