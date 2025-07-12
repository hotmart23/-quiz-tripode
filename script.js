const questions = document.querySelectorAll('.question');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const gainEl = document.getElementById('gain');
const currentEl = document.getElementById('currentSize');
const potentialEl = document.getElementById('potentialSize');

let current = 0;

function updateQuiz() {
  questions.forEach((q,i)=>q.classList.toggle('active', i===current));
  progressBar.style.width = `${((current+1)/questions.length)*100}%`;
  prevBtn.disabled = current===0;
  nextBtn.textContent = current===questions.length-1 ? 'Finalizar' : 'Siguiente →';
}

nextBtn.addEventListener('click', () => {
  if (current < questions.length - 1) {
    current++;
    updateQuiz();
  } else {
    showResult();
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateQuiz();
  }
});

function showResult() {
  let values = [];
  for (let i = 1; i <= questions.length; i++) {
    let checked = document.querySelector(`input[name="q${i}"]:checked`);
    values.push(checked ? parseInt(checked.value) : 1);
  }
  let score = values.reduce((a, b) => a + b, 0);
  let base = 14 + Math.floor(score / values.length);
  let potential = base + 6;

  gainEl.textContent = potential - base;
  currentEl.textContent = base;
  potentialEl.textContent = potential;

  quizContainer.style.display = 'none';
  resultContainer.classList.remove('hidden');
}

updateQuiz();
