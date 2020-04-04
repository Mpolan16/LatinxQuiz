//make html ids js elements
var initialPage = document.querySelector("#initialPage");
var questionPage = document.querySelector ("#questionsPage");
var allDonePage = document.querySelector("#allDonePage");
var startQuizButton = document.querySelector ("#startQuizButton");

var questionDiv= document.querySelector("#question");
var choice0 = document.querySelector("#a");
var choice1 = document.querySelector("#b");
var choice2 = document.querySelector("#c");
var choice3 = document.querySelector("#d");

var timerEl =document.querySelector("#timer");
var secondsLeft=60;

var i=0;

var questions=[
    {
        question:"A person that is Spanish is a person...", 
        choices:["from any Spanish Speaking country", "that is Latino/Latina/Latinx ", "that speaks Spanish", "from the country of Spain"],
        answer: "d"
    },
    {
        question:"a Hispanic person is...", 
        choices:["someone from a Spanish Speaking country","someone that speaks Spanish", "latino/latina/latinx", "from Europe"],
        answer: "a"
    },
    {
        question:"What is a Latino/Latina/Latinx Person?", 
        choices:["a Latin American person","a Spanish person", "a person who has Latin American roots and lives in the USA","someone with the last name Cruz"],
        answer:"c"
    },
    {
        question:"Latin American people...",
        choices:["were born in Latin America","were born in Spain", "were born in the USA","dont speak English"],
        answer:"a"
    },
    {
        question:"Brazilians are...", 
        choices:["Portuguese", "Spanish", "Central American","Latin Americans"],
        answer:"d"
    }
];

//rap in function!
//hide questionPage & allDonePage
initialPage.style.display= "block";
questionPage.style.display= "none";
allDonePage.style.display= "none";

// Show the quiz
startQuizButton.onclick = function(){
showQuiz();
startTimer();
};

function showQuiz() {
    initialPage.style.display= "none";
    populateButtons();
    questionPage.style.display= "block";
};
var timerInterval;
//on the click also start 60s timer
function startTimer() {
        timerInterval = setInterval(function() {
        secondsLeft --;
        timerEl.textContent = secondsLeft;

        if (secondsLeft <=0) {
            gameOver();
        }
    },1000);
};

//first question apears
function populateButtons() {
   var question= questions[i].question;
   questionDiv.textContent = question;
   choice0.textContent = questions[i].choices[0];
   choice1.textContent = questions[i].choices[1];
   choice2.textContent = questions[i].choices[2];
   choice3.textContent = questions[i].choices[3];
   };

//add 1 to index for next quetion
function nextQuestion() {
    i++;
    if(i<questions.length){
        populateButtons();
    }
    else {
        gameOver();
    }
};

var finalScore = document.getElementById("finalScore");

function gameOver () {       
    //go to all done with recorded time
    initialPage.style.display= "none";
    questionPage.style.display= "none";
    allDonePage.style.display= "block";

    finalScore.textContent=secondsLeft;
    clearInterval(timerInterval);
};

function checkAnswer (){
    var answerIndex=questions[i].answer;
    if(event.target.id===answerIndex) {
        corrAnswer();}
    else {
        wrongAnswer();
    };};


//event listener to click next question
choice0.addEventListener ("click", function() {
    checkAnswer();
    nextQuestion();
});

choice1.addEventListener ("click", function() {
        checkAnswer();
        nextQuestion();
});
choice2.addEventListener ("click", function() {
        checkAnswer();
        nextQuestion();
});
choice3.addEventListener ("click", function() {
    checkAnswer();
    nextQuestion();
});

function corrAnswer() {
    //correct answer message, THEN next question
    alert ("that's Correct!");
};

function wrongAnswer() {
        secondsLeft-=10;
        timerEl.textContent = secondsLeft;
        //wrong answer message, THEN next question
        alert ("Wrong! that's 10 seconds off!");
};

var submitButton = document.getElementById("submitButton");
var userInput = document.getElementById("userInput")

submitButton.addEventListener("click", function() {
    //if you use
    var input = userInput.value.trim();
    if (input==="") {
        return;
    }
    //store object in arry in local storage
    var storeScores=[];
    var currentStorage = JSON.parse(localStorage.getItem("scores"));
    if (currentStorage) {
        storeScores=currentStorage;
    };
    //store initials and score
    var inputAndScore= {
        initials: input,
        score: secondsLeft
    }
    storeScores.push(inputAndScore);

    localStorage.setItem("scores",JSON.stringify(storeScores));
    //go to high scores
    location.href="scores.html";
}
);

