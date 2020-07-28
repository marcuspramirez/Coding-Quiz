// Select All Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
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

var lastQuestion = questions.length - 1;
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
    renderCounter();
    start.style.display = "none"
    renderQuestion();
    quiz.style.display = "block"
    renderProgress();
    
    

}

// Render Progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id = "+qIndex +"></div>";
    }
    
}

// counter render
let count = 36;
let TIMER;
let score = 0;



function renderCounter() {
    TIMER = setInterval(function(){
        count--;

        if(count > -1) {
            counter.innerHTML = count;
            
        }else{
            clearInterval(TIMER);
            quiz.style.display = 'none';
            scoreRender();

        }
    }, 1000);
}

// Check Answer Function
function reconcileQuestion(answer){

    if(answer == questions[runningQuestion].correct) {
        score++;
        answerIsCorrect();
        
    }else{
        count = count - 5;
        answerIsWrong();
        
    }
    
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;

        renderQuestion();
        
    }else{
        // End of quiz and show the score
        quiz.style.display = 'none';
        scoreRender();
        //CHeck if user made highscore board and if so let htem input initials
    }
    
    }
    

// Answer is Correct
function answerIsCorrect(){
    document.getElementById(runningQuestion)
}

// Answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion)
}

// Score render
function scoreRender(){
    // This displays the score using the variable scoreDiv created on top of the page
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    var scorePercent = Math.round (100 * score/questions.length);

    scoreDiv.innerHTML += "<p>" + scorePercent + "%</p>";
    scoreDiv.innerHTML += "<input id='initials' placeholder='initials'>";
    scoreDiv.innerHTML += "<button id='high-score-ini' onclick=''>Save</button>";

    //We need functoin for onclick
 
   


    //Data store in local storage must be a string
    //[{}, {}] => JSON.stringify()
//JSON.parse()
//localStorage.getItem()
//localStorage.setItem()

// input intials and log high score at the end of quiz


    
}



