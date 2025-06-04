const questions = [
  {
    question: "🎨 What does HTML stand for?",
    answers: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correct: 0
  },
  {
    question: "💅 Which CSS property changes text color?",
    answers: ["text-color", "color", "font-color", "text-style"],
    correct: 1
  },
  {
    question: "🧠 How do you write an array in JavaScript?",
    answers: [
      'var colors = {"red", "green", "blue"}',
      'var colors = "red", "green", "blue"',
      'var colors = ["red", "green", "blue"]',
      'var colors = (1:"red", 2:"green", 3:"blue")'
    ],
    correct: 1
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    answers: [
      "float ",
      "string",
      "number",
      "boolean"
    ],
    correct: 0
  },
   {
    question: "Which attribute specifies the destination URL of a link?",
    answers: [
      "href  ",
      "src",
      "url",
      "link"
    ],
    correct: 0
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  resultEl.style.display = "none";
  updateProgress();

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function updateProgress() {
  const percent = (currentQuestion / questions.length) * 100;
  progressEl.style.width = percent + "%";
}

function showResult() {
  questionEl.textContent = "🎉 You finished the quiz!";
  answersEl.innerHTML = "";
  scoreEl.textContent = `Score: ${score} / ${questions.length}`;
  resultEl.style.display = "block";
  progressEl.style.width = "100%";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Start
loadQuestion();
