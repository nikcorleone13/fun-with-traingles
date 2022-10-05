// $('form').submit(function(e)
// {
// e.preventDefault();
// })
const quizForm = document.querySelector('.quiz-form');
const submitAnswerButton = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAnswers = ["180", "3", "90"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    // console.log(formResults);

        for (let value of formResults.entries() ){
            if (value === correctAnswers[index]){
                score += 1;
            }
            index += 1;
        }
        // console.log(score);
        outputEl.innerText = "Your score is: " +score;
}

submitAnswerButton.addEventListener('click', calculateScore);