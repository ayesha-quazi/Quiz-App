const questions = [
    {
        question: "What is the purpose of the <meta charset='UTF-8'> tag in HTML?",
        answers: [
            {Text:"To define the viewport settings", correct: false},
            {Text:"To include JavaScript files", correct: false},
            {Text:"To specify the character encoding for the document", correct: true},
            {Text:"To add styles to the document", correct: false},

        ]
    },

    {
        question: "How do you apply a specific style to all <p> elements with the class 'example'?",
        answers: [
            {Text:"example p {}", correct: false},
            {Text:"p .example {}", correct: false},
            {Text:"p#example {}", correct: false},
            {Text:"p.example {}", correct: true},

        ]
    },

    {
        question: "What is the primary difference between let and const in JavaScript?",
        answers: [
            {Text:"let is function-scoped, while const is block-scoped", correct: false},
            {Text:"let allows reassignment, while const does not", correct: true},
            {Text:"let variables are immutable, while const variables are mutable.", correct: false},
            {Text:"let is hoisted, while const is not", correct: false},

        ]
    },

    {
        question: "Which of the following is true about CSS Grid and Flexbox?",
        answers: [
            {Text:"Both are used for one-dimensional layouts.", correct: false},
            {Text:"Flexbox is for one-dimensional layouts, while Grid is for two-dimensional layouts", correct: true},
            {Text:"Grid is for one-dimensional layouts, while Flexbox is for two-dimensional layouts.", correct: false},
            {Text:"Neither supports responsive design.", correct: false},

        ]
    },

    {
        question: "Why is the event delegation pattern used in JavaScript?",
        answers: [
            {Text:"To bind event listeners directly to child elements.", correct: false},
            {Text:"To improve accessibility of HTML elements.", correct: false},
            {Text:"To handle events dynamically and reduce the number of event listeners.", correct: true},
            {Text:"To manage asynchronous code execution.", correct: false},

        ]
    }
]


const questionElement = document.getElementById("question");

const answerButton = document.getElementById("ans-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; 
let score = 0;

function startQuiz(){
    let currentQuestionIndex = 0; 
    let score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");        
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}