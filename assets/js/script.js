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

var score = 0;

function startQuiz() {

    for (var i = 0; i < questions.length; i++) {

        var response = window.prompt(questions[i].prompt);
    
        if (response == questions[i].answer) {
    
            score ++;
    
            alert("Correct!!");
    
        } else {
            alert("Wrong!!");
        }
    };

    alert("You got " + score + "/" + questions.length);
    
};

pageContentEl.addEventListener("click", startQuiz);

