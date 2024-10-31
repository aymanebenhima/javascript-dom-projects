const quizData = [
    {
        question: "What does `var` stand for in JavaScript?",
        answers: [
            { text: "Variable", correct: true },
            { text: "Variation", correct: false },
            { text: "Variety", correct: false },
            { text: "Validator", correct: false }
        ]
    },
    {
        question: "Which method is used to convert JSON data to a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.objectify()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    },
    {
        question: "What is the correct syntax for creating a function in JavaScript?",
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "createFunction myFunction()", correct: false },
            { text: "func myFunction()", correct: false },
            { text: "function:myFunction()", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');
const progressBarFill = document.getElementById('progress-bar-fill');

startQuiz();

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    nextButton.style.display = 'none';
    document.querySelector('.quiz-header').style.display = 'block';
    updateProgressBar();
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
    });

    if (correct) {
        score++;
    }

    nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
    updateProgressBar();
});

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = `You scored ${score} out of ${quizData.length}! 🎉`;
    document.querySelector('.quiz-header').style.display = 'none';
}

restartButton.addEventListener('click', startQuiz);

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}
