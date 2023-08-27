const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultsElement = document.getElementById("results");

const questions = [{
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    choicesElement.innerHTML = "";
    currentQ.choices.forEach((choice) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(choice, currentQ.correctAnswer));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = "none";
    resultsElement.style.display = "block";
    resultsElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
}

submitButton.addEventListener("click", showQuestion);

showQuestion();