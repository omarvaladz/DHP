document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const quizResult = document.getElementById('quizResult');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const answers = [];

        for (let i = 1; i <= 8; i++) {
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedAnswer) {
                answers.push(selectedAnswer.value);
            }
        }

        const score = calculateScore(answers);

        showResult(score);
    });

    function calculateScore(answers) {
        // Puedes personalizar la lógica de puntuación aquí.
        // Asigna puntos según las respuestas correctas.
        const correctAnswers = ["compensacion", "limites", "desplazamiento", "compensacion", "erosion", "escalada", "exito", "tragedia"];
        let score = 0;

        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === correctAnswers[i]) {
                score++;
            }
        }

        return score;
    }

    function showResult(score) {
        quizResult.innerHTML = `Tu puntuación es: ${score} de 8`;
    }
});