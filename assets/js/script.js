var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");
var testbodyEl = document.getElementById("testbody");
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var scorealertEl = document.getElementById("scorealert")


var secondsLeft = 75;
var currentscore = 0;





  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time Remaining:" + secondsLeft;
  
      if(secondsLeft <= 0) {
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

var QuestionContent = [{
    q: "1) Commonly used data types DO NOT include:",
    a: [{ text: "a) strings", Accuracy: false },
    { text: "b) booleans", Accuracy: false },
    { text: "c) alerts", Accuracy: true },
    { text: "d) numbers", Accuracy: false }
    ]
 
},
{
    q: "The condition in an if/else statement is enclosed within ____. ",
    a: [{ text: "a) quotes", Accuracy: false},
    { text: "b) curly brackets", Accuracy: false},
    { text: "c) parentheses", Accuracy: true},
    { text: "d) square brackets", Accuracy: false}
    ]
 
},
{
    q: "Arrays in JavaScript can be used to store ______.",
    a: [{ text: "a) numbers and strings", Accuracy: true },
    { text: "b) other arrays", Accuracy: false },
    { text: "c) booleans", Accuracy: false },
    { text: "d) all of the above", Accuracy: false }
    ]
 
}]




////
var curQuestion = 0
var score = 0

function callQues() { 
    questionsEl.textContent = QuestionContent[curQuestion].q;
    answersEl.innerHTML = ""
 
    for (let i = 0; i < QuestionContent[curQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choiceLabel.setAttribute("class", "answers")
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = QuestionContent[curQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        answersEl.appendChild(choicesdiv);
    }
}
var quizstarter = document.querySelector("#startquiz");
quizstarter.addEventListener("click", function() {
callQues();
var desEl = document.getElementById("quizsum");
    desEl.remove();
var SUBMIT = document.createElement("button");
var buttonEl = document.getElementById("buttonspace")
SUBMIT.setAttribute("id", "SUBMIT");
SUBMIT.setAttribute("class", "SUBMIT")
SUBMIT.textContent = "Submit";
buttonEl.appendChild(SUBMIT);


    SUBMIT.addEventListener("click", function() {
        const selection = parseInt(document.querySelector('input[name="answer"]:checked').value);
         
            if (QuestionContent[curQuestion].a[selection].Accuracy) {
                console.log("Correct");
                currentscore++;
                var currentscoreEl = document.createElement("h3");
currentscoreEl.textContent = "Current Score:" + currentscore;
currentscoreEl.setAttribute("style", "text-align:right");
scorealertEl.appendChild(currentscoreEl); 
                //create alert
                nextQuestion();
            } 
            else {
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;
                secondsLeft--;

                //create alert
            }
        
 
 
function nextQuestion() {
    if (curQuestion < QuestionContent.length - 1) {
        curQuestion++;
        callQues();
    } else {
        questionsEl.remove();
        answersEl.remove();
    }
}})})



  
//Header Items
/// View HighScores link
//// Display top 10 scores
/// See the timer countdown

//Body Items
///Include starter language
////Add starter button - Prompt questions
///Correct/Incorrect Indicator
///Final Score - Include initials