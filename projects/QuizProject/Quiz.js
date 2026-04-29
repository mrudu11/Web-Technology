const questions = [
  {
    question: "Which language runs in browser?",
    options: ["Java", "C", "JavaScript", "Python"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Color Style Sheet",
      "Cascading Style Sheets",
      "Computer Style Sheet",
      "Creative Style Sheet"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  }
];

let currentIndex = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  selectedOption = null;
  nextBtn.disabled = true;

  const current = questions[currentIndex];
  questionEl.innerText = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".options button")
        .forEach(b => b.classList.remove("selected"));

      btn.classList.add("selected");
      selectedOption = option;
      nextBtn.disabled = false;
    });

    optionsEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.innerText = " Quiz Finished!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
  }
});

loadQuestion();