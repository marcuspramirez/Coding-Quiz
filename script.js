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
    choiceA : "Helicobactor Time Manager Line",
    choiceB : "Hyper Text Markup Language",
    choiceC : "Hyper Text Minor Linkage",
    correct : "B"
    },

    {
    question : "What does CSS stand for ?",
    choiceA : "Cascading Style Sheets",
    choiceB : "Cascading Style Samples",
    choiceC : "Catche Style Simplified",
    correct : "A"
    },

    {
    question : "What does JS stand for?",
    choiceA : "JavaSheet",
    choiceB : "JavaScript",
    choiceC : "JavaStyle",
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

