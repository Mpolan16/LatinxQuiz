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

//on the click also start 60s timer
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timerEl.textContent = secondsLeft;

        if (secondsLeft ===0) {
            clearInterval(timerInterval);
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
    populateButtons();
    //if i>array length then hide show all done page + capture timer score
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
    var takeTen= function(){
        secondsLeft-=10;
        timerEl.textContent = secondsLeft;
        //wrong answer message, THEN next question
        alert ("Wrong! that's 10 seconds off!");
        console.log(takeTen);
    }
    takeTen();
};

// 3. (if time is <=0 then clear interval and call Game over Function=stop timer) then display new question and options and clear the message of right and wrong <message div>. then, incude if statement [if you already displayed the next question if the next question exists, else if go to 'game over' function and clear interval] shortcut: put clear interval in the game over function to not type twice.

// 4. then it starts over and over again

// 5. conditions: you loose the game is if reaches 0 or less then 0, and game ends if youve answered all the questions. 

//6. when came is over, hide the quiz section and show the game over section.

//7. if they press the sumbit button then capture the initials they entered, if intial box empty, return. store initials and time in local storage. get what is in local sotrage (array) then push new score into array, store updated array in local stroage. store as an array of objects.
//8. open view high scores.
