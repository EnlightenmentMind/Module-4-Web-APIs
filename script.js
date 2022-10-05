//09 Timers
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var seconderLeft = 75;

const quizStatusDict = {
    readyToStart:0,
    inQuiz:1,
    quizEnd:2
};

const questionBank = [
    {
        question:"Coding Quiz Challenge",
    
        //"Try to answer the following code-related qustions within the time limit.",
       // "Keep in mind that incorrect answers will penalize your score/time by ten second!"
    },
    {    //1
        question:"Commonly used data types Do Not Include:",
        answer0:"trings",
        answer1:"booleans",
        answer2:"alerts",
        answer3:"numbers",
        correct:2,
        point:10

    },
    {   //2
        question:"The condition in an if / else statement is enclosed with ______.",
        answer0:"quotes",
        answer1:"curly brackets",
        answer2:"parenthesis",
        answer3:"square brackets",
        correct:2,
        point:10
    },
    {   //3
        question:"Arrys in JavaScript can be used to store _____.",
        answer0:"number and strings",
        answer1:"other arrays",
        answer2:"booleans",
        answer3:"all of the above",
        correct:3,
        point:10
    },
    {   //4
        question:"String values must be enclosed within _____ when being assigned to variables.",
        answer0:"commas",
        answer1:"curly brackets",
        answer2:"quotes",
        answer3:"parenthesis",
        correct:2,
        point:10
    },
    {   //5
        question:"A very useful tool used during development and debugging for printting content to the debugger is:",
        answer0:"JavaScript",
        answer1:"terminal/bash",
        answer2:"for loops",
        answer3:"console.log",
        correct:3,
        point:10
    }
]

var quizTimerInterval = null;

function StartQuizTimer(){

    console.log("------ Start Quiz Timer >>>> ");

    quizTimerInterval = setInterval(function(){

        if (quizStatus == quizStatusDict.quizEnd)
        {
            if (currentTimeSecond <= 0)
            {
                currentTimeSecond = 0;
            }

            lab_timeLeft.textContent = currentTimeSecond.toString();
            ClearQuizTimer();
            return;
        }

        currentTimeSecond--;
        
        if(currentTimeSecond <= 0)
        {
            currentTimeSecond = 0;
            lab_timeLeft.textContent = currentTimeSecond.toString();
            ClearQuizTimer();
            QuizEndAction();
        }
        else
        {
            lab_timeLeft.textContent = currentTimeSecond.toString();
        }
    }, 1000);
}

function ClearQuizTimer()
{
    console.log(">>> ClearQuizTimer");

    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
}

const fullTimeSeconds = 75;
const finalScorePageIndex = 6;
const highScorePageIndex = 7;

var answeredFlag = false;
var quizStatus = 0;

var currentScore = 0;
var currentTimeSecond = 0;

var currentPage = 0;

var div_TitleChallenge = document.getElementById("div_Title_Challenge");

var div_startQuiz = document.getElementById("div_startQuiz");
var div_question1 = document.getElementById("div_question1");
var div_question2 = document.getElementById("div_question2");
var div_question3 = document.getElementById("div_question3");
var div_question4 = document.getElementById("div_question4");
var div_question5 = document.getElementById("div_question5");
var div_question6 = document.getElementById("div_question6");

var div_questionResult = document.getElementById("div_questionResult");
var div_finalScore = document.getElementById("div_FinalScore");
var div_HighScore = document.getElementById("div_HighScore");

var btn_startQuiz = document.getElementById("btn_StartQuiz");
//1
var btn_q1_string = document.getElementById("btn_q1_string");
var btn_q1_booleans = document.getElementById("btn_q1_booleans");
var btn_q1_alert = document.getElementById("btn_q1_alert");
var btn_q1_numbers = document.getElementById("btn_q1_numbers");
//2
var btn_q2_quotes = document.getElementById("btn_q2_quotes");
var btn_q2_curlyBracket = document.getElementById("btn_q2_curlyBracket");
var btn_q2_parenthesis = document.getElementById("btn_q2_parenthesis");
var btn_q2_squareBrackets = document.getElementById("btn_q2_squareBrackets");
//3
var btn_q3_numberAndStrings = document.getElementById("btn_q3_numberAndStrings");
var btn_q3_otherArrays_booleans = document.getElementById("btn_q3_otherArrays");
var btn_q3_booleans = document.getElementById("btn_q3_booleans");
var btn_q3_allOfTheAbove = document.getElementById("btn_q3_allOfTheAbove");
//4
var btn_q4_commas = document.getElementById("btn_q4_commas");
var btn_q4_curlyBrackets = document.getElementById("btn_q4_curlyBrackets");
var btn_q4_quotes = document.getElementById("btn_q4_quotes");
var btn_q4_parenthesis= document.getElementById("btn_q4_parenthesis");
//5
var btn_q5_JavaScript = document.getElementById("btn_q5_JavaScript");
var btn_q5_terminalBash = document.getElementById("btn_q5_terminalBash");
var btn_q5_forLoops = document.getElementById("btn_q5_forLoops");
var btn_q5_consoleLog = document.getElementById("btn_q5_consoleLog");

var btn_submitFinalScore = document.getElementById("btn_submitFinalScore");
var btn_goBack = document.getElementById("btn_goBack");
var btn_clearHighScore = document.getElementById("btn_clearHighScore");

var lab_Result = document.getElementById("lab_result");
var lab_finalScore = document.getElementById("lab_finalScore");
var lab_highScore = document.getElementById("lab_highScore");
var lab_timeLeft = document.getElementById("lab_timeLeft");

var txt_highScore = document.getElementById("txt_highScore");
var txt_init = document.getElementById("txt_init");

var highScore_init = "";
var highScore_score = 0;

//6
function HidenAllPages()
{
    div_startQuiz.style.display = "none";
    div_question1.style.display = "none";
    div_question2.style.display = "none";
    div_question3.style.display = "none";
    div_question4.style.display = "none";
    div_question5.style.display = "none";

    div_questionResult.style.display = "none";
    div_finalScore.style.display = "none";
    div_HighScore.style.display = "none";
}

function InitPage()
{
    console.log(">>> Init Page!");

    currentPage = 0;
    HidenAllPages();
    div_startQuiz.style.display = "block";
    currentTimeSecond = fullTimeSeconds;
    lab_timeLeft.textContent = currentTimeSecond;
}

function SwitchPage(group)
{
    switch(group)
    {
        case 0:
            HidenAllPages();
            div_startQuiz.style.display = "block";
            currentPage = 0;
            break;

        case 1:
            HidenAllPages();
            div_question1.style.display = "block";
            currentPage = 1;
            break;
        
        case 2:
            HidenAllPages();
            div_question2.style.display = "block";
            currentPage = 2;
            break;

        case 3:
            HidenAllPages();
            div_question3.style.display = "block";
            currentPage = 3;
            break;

        case 4:
            HidenAllPages();
            div_question4.style.display = "block";
            currentPage = 4;
            break;

        case 5:
            HidenAllPages();
            div_question5.style.display = "block";
            currentPage = 5;
            break;

        case 6:
            HidenAllPages();
            div_finalScore.style.display = "block";
            txt_init.value = "";
            currentPage = 6;
            break;
        case 7:
            HidenAllPages();
            div_HighScore.style.display = "block";
            ShowHighScore();
            currentPage = 7;
            break;

        default:
            break;
    }

    answeredFlag = false;
    SetButtonsEventListener(group);
}

function SetButtonsEventListener(group)
{
    var stuAnswer = 0;

    if (group == 1)
    {
        btn_q1_string.addEventListener("click", function() {
            stuAnswer = 0;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q1_booleans.addEventListener("click", function() {
            stuAnswer = 1;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q1_alert.addEventListener("click", function() {
            stuAnswer = 2;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q1_numbers.addEventListener("click", function() {
            stuAnswer = 3;
            StuAnswerAction(group, stuAnswer);
        });
    }
    else if (group == 2)
    {
        btn_q2_quotes.addEventListener("click", function() {
            stuAnswer = 0;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q2_curlyBracket.addEventListener("click", function() {
            stuAnswer = 1;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q2_parenthesis.addEventListener("click", function() {
            stuAnswer = 2;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q2_squareBrackets.addEventListener("click", function() {
            stuAnswer = 3;
            StuAnswerAction(group, stuAnswer);
        });
    }
    else if (group == 3)
    {
        btn_q3_numberAndStrings.addEventListener("click", function() {
            stuAnswer = 0;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q3_otherArrays.addEventListener("click", function() {
            stuAnswer = 1;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q3_booleans.addEventListener("click", function() {
            stuAnswer = 2;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q3_allOfTheAbove.addEventListener("click", function() {
            stuAnswer = 3;
            StuAnswerAction(group, stuAnswer);
        });
    }
    else if (group == 4)
    {
        btn_q4_commas.addEventListener("click", function() {
            stuAnswer = 0;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q4_curlyBrackets.addEventListener("click", function() {
            stuAnswer = 1;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q4_quotes.addEventListener("click", function() {
            stuAnswer = 2;
            StuAnswerAction(group, stuAnswer);
        });
    
        btn_q4_parenthesis.addEventListener("click", function() {
            stuAnswer = 3;
            StuAnswerAction(group, stuAnswer);
        });
    }
    else if (group == 5)
    {
        btn_q5_JavaScript.addEventListener("click", function() {
            stuAnswer = 0;
            StuAnswerAction(group, stuAnswer);
        });
       btn_q5_terminalBash.addEventListener("click", function() {
            stuAnswer = 1;
            StuAnswerAction(group, stuAnswer);
        })
       btn_q5_forLoops.addEventListener("click", function() {
            stuAnswer = 2;
            StuAnswerAction(group, stuAnswer);
        })
       btn_q5_consoleLog.addEventListener("click", function() {
            stuAnswer = 3;
            StuAnswerAction(group, stuAnswer);
        })
    }
    else if (group == 6)
    {
        btn_submitFinalScore.addEventListener("click", function(){
            SubmitInitAction();
        });
    }
    else if (group == 7)
    {
        btn_goBack.addEventListener("click", function(){
            GoBackAction();
        });

        btn_clearHighScore.addEventListener("click", function(){
            ClearHighScoreAction();
        });
    }
}

const pageStaySecond = 1;
var pageStaySecondLeft = pageStaySecond;

function SetPageStayTimer()
{
    var pageTimerInterval = setInterval(function(){

        if (quizStatus == quizStatusDict.quizEnd)
        {
            clearInterval(pageTimerInterval);
            return;
        }

        pageStaySecondLeft--;
    
        if (pageStaySecondLeft <= 0)
        {
            clearInterval(pageTimerInterval);
            ShowNextPage();
        }
    }, 1000);
}

function ShowNextPage()
{
    if (quizStatus == quizStatusDict.quizEnd)
    {
        return;
    }

    CloseQuestionResult();

    if (currentPage + 1 == finalScorePageIndex)
    {
        QuizEndAction();
    }
    else
    {
        SwitchPage(currentPage + 1);
        pageStaySecondLeft = pageStaySecond;
    }
}

function StuAnswerAction(group, stuAnswer)
{
    if (answeredFlag == true)
    {
        return;
    }

    answeredFlag = true;
    checkedResult = CheckAnswer(group, stuAnswer);
    ShowQuestionResult(checkedResult, group); 

    SetPageStayTimer();
}

function CheckAnswer(group, stuAnswer)
{
    var correctAnswerIndex = questionBank[group].correct;
    var questionPoint = questionBank[group].point;

    if (stuAnswer == correctAnswerIndex)
    {
        return true;
    }

    currentTimeSecond -= questionPoint;
    return false;
}

function ShowQuestionResult(result, group)
{
    div_questionResult.style.display = "block";

    if (result == true)
    {
        lab_Result.textContent = "Correct !";
    }
    else
    {
        lab_Result.textContent = "Wrong !";
    }
}

function CloseQuestionResult()
{
    lab_Result.textContent = "";
    div_questionResult.style.display = "none";
}

function QuizEndAction()
{
    quizStatus = quizStatusDict.quizEnd;
    SwitchPage(finalScorePageIndex);
    pageStaySecondLeft = pageStaySecond;

    lab_finalScore.textContent = currentTimeSecond.toString();
}

function SubmitInitAction()
{
    console.log(">>Enter Submit Init Action")
    console.log(txt_init.value);

    if (txt_init.value == null || txt_init.value == "")
    {
        return;
    }

    if (currentTimeSecond > highScore_score)
    {
        highScore_score = currentTimeSecond;
        highScore_init = txt_init.value;

        console.log("High Score Changed to: " + highScore_score);
        console.log("High Socre Init Changed to: " + highScore_init);
    }

    console.log(">>Ready to switch High Score!");

    SwitchPage(highScorePageIndex);
}

function ShowHighScore()
{
    if (highScore_score >= 0)
    {
        var str_HighScore = highScore_init + " - " + highScore_score;
        txt_highScore.style.display = "block";
        txt_highScore.value = str_HighScore;
    }  
}

function GoBackAction()
{
    ClearQuizTimer();
    InitPage();
    InitQuiz();
}

function ClearHighScoreAction()
{
    txt_highScore.style.display = "none";

    highScore_score = -1;
    highScore_init = null;
}

function InitQuiz()
{
    btn_startQuiz.addEventListener("click", StartQuizAction);
}

function StartQuizAction()
{
    SwitchPage(1);
    quizStatus = quizStatusDict.inQuiz;
    StartQuizTimer();

    btn_startQuiz.removeEventListener("click", StartQuizAction);
}

InitPage();
InitQuiz();


