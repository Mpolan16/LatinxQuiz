//make html ids js elements
var initialPage = document.querySelector("#initialPage");
var questionPage = document.querySelector ("#questionsPage");
var allDonePage = document.querySelector("#allDonePage");
var startQuizButton = document.querySelector ("#startQuizButton");

var questionDiv= document.querySelector("#question");
var choice0 = document.querySelector("#btn0");
var choice1 = document.querySelector("#btn1");
var choice2 = document.querySelector("#btn2");
var choice3 = document.querySelector("#btn3");

var timerEl =document.querySelector("#timer");
var secondsLeft=60;

var quesOnScreen=0;

var questions=[
    {
        question:"A person that is Spanish is a person...", 
        choices:["from any Spanish Speaking country", "that is Latino/Latina/Latinx ", "that speaks Spanish", "from the country of Spain"],
        answer:3
    },
    {
        question:"a Hispanic person is...", 
        choices:["someone from a Spanish Speaking country","someone that speaks Spanish", "latino/latina/latinx", "from Europe"],
        answer:0
    },
    {
        question:"What is a Latino/Latina/Latinx Person?", 
        choices:["a Latin American person","a Spanish person", "a person who has Latin American roots and lives in the USA","someone with the last name Cruz"],
        answer:2
    },
    {
        question:"Latin American people...",
        choices:["were born in Latin America","were born in Spain", "were born in the USA","dont speak English"],
        answer:0
    },
    {
        question:"Brazilians are...", 
        choices:["Portuguese", "Spanish", "Central American","Latin Americans"],
        answer:3
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
   var question= questions[0].question;
   

   //in order to get to the next question,set up a variable that's going to change the index from 0 to 1. the 0 to 1 will be in the click event.becuase we want it to happen after they have chosen. after i change the index from 0 to 1 we have to re run populate Buttons function again. just worry about next question showing up!
   
   questionDiv.textContent =question;
   choice0.textContent=questions[0].choices[0];
   choice1.textContent=questions[0].choices[1];choice2.textContent=questions[0].choices[2];choice3.textContent=questions[0].choices[3];
   
};

choice0.onclick = function() {
    //on click of choice index 0, go to question index 1
};

// 3. click event separate from the above, with user choices. Then, in this event you have to capture the choice the user clicked, once you know the choice you need to compare that to the correct answer and if the answer is correct then display 'correct' if the answer is wrong reduce time by certain amount and then display 'wrong' (if time is <=0 then clear interval and call Game over Function=stop timer) then display new question and options and clear the message of right and wrong <message div>. then, incude if statement [if you already displayed the next question if the next question exists, else if go to 'game over' function and clear interval] shortcut: put clear interval in the game over function to not type twice.

// 4. then it starts over and over again

// 5. conditions: you loose the game is if reaches 0 or less then 0, and game ends if youve answered all the questions. 

//6. when came is over, hide the quiz section and show the game over section.

//7. if they press the sumbit button then capture the initials they entered, if intial box empty, return. store initials and time in local storage. get what is in local sotrage (array) then push new score into array, store updated array in local stroage. store as an array of objects.
//8. open view high scores.

