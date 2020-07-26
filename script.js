// Select All Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");


// Array of Questions

let questions  = [
    {
    question : "What does HTML stand for?",
    choiceA : "A: Helicobactor Time Manager Line",
    choiceB : "B: Hyper Text Markup Language",
    choiceC : "C: Hyper Text Minor Linkage",
    correct : "B"
    },

    {
    question : "What does CSS stand for ?",
    choiceA : "A: Cascading Style Sheets",
    choiceB : "B: Cascading Style Samples",
    choiceC : "C: Catche Style Simplified",
    correct : "A"
    },

    {
    question : "What does JS stand for?",
    choiceA : "A: JavaSheet",
    choiceB : "B: JavaScript",
    choiceC : "C: JavaStyle",
    correct : "B"
    },

]

// Create Some Variables
// Render Questions

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// Start Quiz
function startQuiz(){
    start.style.display = "none"
    renderQuestion();
    quiz.style.display = "block"
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);

}

// Render Progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id = "+qIndex +"></div>";
    }
}

// counter render
let count = 0;
const questionTime = 10; // 10 seconds for every question
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


function renderCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeUnit * count + "px";
        count++;
    }else{
        count = 0;

        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // End of quiz and counter and show the score
            clearInterval(TIMER);
            scoreRender();
           
        }
    }
    
}


// Check Answer Function
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct) {
        score++;
        answerIsCorrect();
    }else{
        anwerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // End of quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// Answer is Correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// Answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// Score render
function scoreRender(){
    // This displays the score using the variable scoreDiv created on top of the page
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePercent = Math.round (100 * score/questions.length);

    scoreDiv.innerHTML += "<p>" + scorePercent + "%</p>";

    
}

