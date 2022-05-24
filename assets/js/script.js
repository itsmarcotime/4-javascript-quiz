var questions = [
    {
        prompt: "True or False? JAVASCRIPT is the same as JAVA?",

        answer: "false"
    },
    {
        prompt: "What will be the result of this function in the DevTools Console? \nfunction a() { var x = 2 + 8;\n console.log(x);\n };\n a();\nA. 2\nB. 8\nC. 10\nD. undefined",

        answer: "c"

    },
    {
        prompt: "What will be the result of this function in the DevTools Console?\nfunction num() {\nconsole.log(x);\n};\nnum();\nvar x = 10;\nA. 10\nB. Undefined\nC. Error!!\nD. This function is not possible in javascript",

        answer: "b"
    },
];

var pageContentEl = document.querySelector("#page-content");

var buttonEl = document.querySelector("#countdown");

var score = 0;

var startTime = 1

var time = startTime * 60;

var countDownEl = document.getElementById("countdown");

var refreshInterval = setInterval(startCountDown, 1000)



function startCountDown() {

        const minutes = Math.floor(time / 60);

        let seconds = time % 60;

        countDownEl.innerHTML = `${minutes}:${seconds}`;

        time--;

        if (time < 0) {

            clearInterval(refreshInterval);

        } else if (time == 0) {

            alert("TIMES UP!! Test is over!");

            endQuiz();

        };

};

function startQuiz() {

    startCountDown();

    for (var i = 0; i < questions.length; i++) {

        var response = window.prompt(questions[i].prompt);
    
        if (response == questions[i].answer) {
    
            score ++;
    
            alert("Correct!!");
    
        } else {
            alert("Wrong!!");
        }
    };

    endQuiz();
    
};

function endQuiz() {

    var name = "";

    alert("The quiz is over. Lets see how you scored!");

    alert("You got " + score + "/" + questions.length);

    name = prompt("Whats your name?");

    //check local storage for other scores, if nothing use 0
    var highScore = localStorage.getItem("highscore");

    if (highScore === null) {
        highScore = 0;
    }

    //if student has a higher score, student gets new high score!
    if (score > highScore) {

        alert("You have the highest score right now!!");

        localStorage.setItem("highScore", score);
        localStorage.setItem("name", name);

        alert(name + " now has the highscore of " + score + "!");
    } else {
        alert(name + " didnt beat the highscore of " + highScore + ". Maybe next time!");
    }

    //ask player if theyd like to take quiz again
    var playAgainConfirm = confirm("Would you like to retake the quiz?");

    if (playAgainConfirm) {

        startQuiz();

    } else {
        alert("Thank you for taking Chi's Javascript Quiz!");
    }

};

buttonEl.addEventListener("click", startCountDown);
pageContentEl.addEventListener("click", startQuiz);


