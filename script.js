const questions = document.querySelectorAll('.question');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
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
    alert('✅¡Gracias por completar el diagnóstico!');
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateQuiz();
  }
});

updateQuiz();
