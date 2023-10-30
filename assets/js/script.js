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


    var currentscoreEl = document.createElement("h3");
currentscoreEl.textContent = "Current Score:" + currentscore;
currentscoreEl.setAttribute("style", "text-align:right");
scorealertEl.appendChild(currentscoreEl); 


////
var currQuestion = 0
var score = 0

function callQues() { 
    questionsEl.textContent = QuestionContent[currQuestion].q;
    answersEl.innerHTML = ""
 
    for (let i = 0; i < QuestionContent[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "select";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = QuestionContent[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        answersEl.appendChild(choicesdiv);
    }
}
var quizstarter = document.querySelector("#startquiz");
quizstarter.addEventListener("click", function() {
callQues();
var desEl = document.getElementById("quizsum");
    desEl.remove();})
 
// function loadScore() {
//     const totalScore = document.getElementById("score")
//     totalScore.textContent = `You scored ${score} out of ${Questions.length}`
// }
 
 
// function nextQuestion() {
//     if (currQuestion < Questions.length - 1) {
//         currQuestion++;
//         loadQues();
//     } else {
//         document.getElementById("opt").remove()
//         document.getElementById("ques").remove()
//         document.getElementById("btn").remove()
//         loadScore();
//     }
// }
 
// function checkAns() {
//     const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
//     if (Questions[currQuestion].a[selectedAns].isCorrect) {
//         score++;
//         console.log("Correct")
//         nextQuestion();
//     } else {
//         nextQuestion();
//     }
// }


  
//Header Items
/// View HighScores link
//// Display top 10 scores
/// See the timer countdown

//Body Items
///Include starter language
////Add starter button - Prompt questions
///Correct/Incorrect Indicator
///Final Score - Include initials