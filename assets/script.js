//global variables
var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var correctPrompt = document.getElementById("hide-correct");
var incorrectPrompt = document.getElementById("hide-wrong");
var mainSection = document.getElementById("mainSection");
var finalSection = document.getElementById("finishSection");
var finalScore = document.getElementById("score");
var highscoresSection = document.getElementById("highscoresSection");
var questionNumber =1;
var sec = 75;

//timer function reduces one second from user time
function startTimer()
{
    var seconds  = sec;
    document.getElementById("timer").innerHTML =seconds;
    sec--;
    if (sec <= 0) {
        sec = 75;
    }
};
//this function sets interval for 1 second and calls timer function every second
setInterval(function() {
    startTimer()
  }, 1000);

//this funciton checks user input 
  function submitAnswer(answer)
  {

   hidePrompt();
    if(questionNumber === 1 && answer === 2) 
    {
        correctPrompt.style.display = "block";
        nextQuestion(questionNumber);
        setTimeout(hidePrompt, 1500);
        return;
    }
    if(questionNumber === 2 && answer === 3)
    {
        correctPrompt.style.display = "block";
        nextQuestion(questionNumber);
        setTimeout(hidePrompt, 1500);
        return;
    }
    if(questionNumber === 3 && answer === 4)
    {
        correctPrompt.style.display = "block";
        nextQuestion(questionNumber);
        setTimeout(hidePrompt, 1500);
        return;
    }
    if(questionNumber === 4 && answer === 3)
    {
        correctPrompt.style.display = "block";
        nextQuestion(questionNumber);
        setTimeout(hidePrompt, 1500);
        return;
    }
    if(questionNumber === 5 && answer === 4)
    {
        correctPrompt.style.display = "block";
        nextQuestion(questionNumber);
        setTimeout(hidePrompt, 1500);
        return;
    }

    incorrectPrompt.style.display = "block";
    penalty();
    nextQuestion(questionNumber);
    setTimeout(hidePrompt, 1500);
    return;
  }

  //function for retriving next question this function takes 1 parameter of intereger which is then conditionally checked to which question to be shown

    function nextQuestion(number)
    {
        
        var qNo = ++number;
        if(qNo >= 5)
        {
            mainSection.style.display="none";
            finalSection.style.display="block";
            finalScore.innerHTML = sec;
         
        }
        
        if(qNo === 2)
        {
            question.innerHTML = "The condition in an if / else statement is enclosed within ______.";
            choice1.innerHTML = "1. quotes"; 
            choice2.innerHTML = "2. curly brackets";
            choice3.innerHTML = "3. parenthesis"; //correct
            choice4.innerHTML = "4. square brackets";
        }
        if(qNo === 3)
        {
            question.innerHTML = "Arrays in javascript can be used to store ______.";
            choice1.innerHTML = "1. numbers and strings";
            choice2.innerHTML = "2. other arrays";
            choice3.innerHTML = "3. booleans";
            choice4.innerHTML = "4. all of the above"; //correct
        }
        if(qNo === 4)
        {
            question.innerHTML = "String values must be enclosed within ______ when being assigned to variables.";
            choice1.innerHTML = "1. commas"; 
            choice2.innerHTML = "2. curly brackets";
            choice3.innerHTML = "3. quotes";//correct
            choice4.innerHTML = "4. parentheses";
        }
        if(qNo === 5)
        {
            question.innerHTML = "A very useful tool used during developlment and debugging for putting content to the debugger is:";
            choice1.innerHTML = "1. Javascript";
            choice2.innerHTML = "2. terminal / bash";
            choice3.innerHTML = "3. for loops";
            choice4.innerHTML = "4. console.log"; //correct
        }
        questionNumber++;
    }

    // function for submit initials after quiz completed
    function submitInitials()
    {
        finalSection.style.display="none";
        var initial = document.getElementById("initails-input").value;
        var string = initial +"-" +sec;
        localStorage.setItem("score",string);
        highscoresSection.style.display="block";
        document.getElementById("highScoreList").innerHTML= "1. "+string;
        
    }

    //function for clearing high scores
    function clearHighScores(){
        document.getElementById("highScoreList").innerHTML= "";
        localStorage.clear();
    }

    //fuinction for hiding prompts
    function hidePrompt()
    {
        correctPrompt.style.display = "none";
        incorrectPrompt.style.display = "none";

    }

    //function for reducing time
    function penalty()
    {
        sec = sec-10;
    }