
class Question {
  constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  isCorrect(answer) {
    return this.correctAnswer === answer;
  }
}


class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  guess(answer) {
    if (this.getCurrentQuestion().isCorrect(answer)) {
      this.score++;
    }
    this.currentIndex++;
  }

  hasEnded() {
    return this.currentIndex >= this.questions.length;
  }
}


const questions = [
  new Question("Riders to the Sea is—", 
    ["An epic poem", "A one-act play", "A novella", "A theatrical adaptation of poem"], 
    "A one-act play"),

  new Question("The word 'protocol' in 'It is time to review the protocol on testing nuclear weapons' means—", 
    ["Record of rules", "Procedures", "Summary of rules", "Problems"], 
    "Record of rules"),

  new Question("‘Amazing song haunted me for a long time.’ The word ‘That’ refers to—", 
    ["These", "Thus", "Those", "That"], 
    "That"),

  new Question("‘Let us begin by looking at the minutes of the meeting.’ The word ‘minutes’ means—", 
    ["Time record", "Written record", "Time frame", "Written analysis"], 
    "Written record"),

  new Question("‘The noise level in Dhaka city has increased exponentially.’ The underlined word means—", 
    ["Amazingly", "Steadily", "Shockingly", "Rapidly"], 
    "Rapidly"),

  new Question("Which of the following writers belongs to the Elizabethan period?", 
    ["Christopher Marlowe", "John Dryden", "Alexander Pope", "Samuel Beckett"], 
    "Christopher Marlowe"),

  new Question("‘Women are too often constrained by family commitments.’ The underlined word means—", 
    ["Confused", "Contaminated", "Controlled", "Constrained"], 
    "Constrained"),

  new Question("‘To be, or not to be, that is the question’ — is a famous dialogue from—", 
    ["Othello", "Hamlet", "Romeo and Juliet", "Macbeth"], 
    "Hamlet"),

  new Question("Class relations and societal conflict is the key understanding of—", 
    ["Feminism", "Structuralism", "Formalism", "Marxism"], 
    "Marxism"),

  new Question("‘Societies living in the periphery are always ignored.’ The underlined word means—", 
    ["Offshore areas", "Remote places", "Marginal areas", "Backward regions"], 
    "Marginal areas"),

  new Question("‘A stitch in time saves nine’ — refers to the importance of—", 
    ["Saving lives", "Saving time", "Timely action", "Time tailoring"], 
    "Timely action"),

  new Question("Which is the correct sentence?", 
    ["He insisted on seeing her", "He insisted for seeing her", "He insisted in seeing her", "He insisted to be seeing her"], 
    "He insisted on seeing her"),

  new Question("The phrase ‘nouveau riche’ means—", 
    ["Riche rich", "New high class", "Well off", "New rich"], 
    "New rich"),

  new Question("What would be the best antonym of ‘hibernate’?", 
    ["Dormancy", "Sluggishness", "Liveliness", "Democracy"], 
    "Liveliness"),

  new Question("‘I am in the process of collecting material for my story.’ The underlined word is a/an—", 
    ["Verb", "Adverb", "Adjective", "Noun"], 
    "Noun"),

  new Question("‘Depression is often hereditary.’ The underlined word is a/an—", 
    ["Adverb", "Noun", "Adjective", "Verb"], 
    "Adjective"),

  new Question("Find the odd-man-out—", 
    ["George Eliot", "Joseph Conrad", "Thomas Hardy", "James Joyce"], 
    "George Eliot"),

  new Question("Find the odd-man-out—", 
    ["The Bluest Eye", "As I Lay Dying", "Sula", "Mercy"], 
    "As I Lay Dying"),

  new Question("The idiom ‘once in a blue moon’ means—", 
    ["Very often", "Never", "Rarely", "Always"], 
    "Rarely"),

  new Question("The synonym of ‘benevolent’ is—", 
    ["Kind", "Cruel", "Greedy", "Lazy"], 
    "Kind")
];


const quiz = new Quiz(questions);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  let currentQuestion = quiz.getCurrentQuestion();
  questionEl.textContent = currentQuestion.text;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("div");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(option));
    optionsEl.appendChild(button);
  });
  progressEl.textContent = `Question ${quiz.currentIndex + 1} of ${quiz.questions.length}`;
}

function selectAnswer(answer) {
  quiz.guess(answer);
  if (quiz.hasEnded()) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  progressEl.textContent = "";
  resultEl.textContent = `Your Score: ${quiz.score} / ${quiz.questions.length}`;
  resultEl.classList.remove("hidden");
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
}

restartBtn.addEventListener("click", () => {
  quiz.currentIndex = 0;
  quiz.score = 0;
  resultEl.classList.add("hidden");
  restartBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  showQuestion();
});

showQuestion();
