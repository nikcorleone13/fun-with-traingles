// $('form').submit(function(e)
// {
// e.preventDefault();
// })
const quizForm = document.querySelector('.quiz-form');
const submitAnswerButton = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAnswers = ["180", "3", "90" , "Equilateral Triangle", "greater" ];
// event.preventDefault();
function calculateScore(){
    let score = 0;
    let index = 0;
    
    const formResults = new FormData(quizForm);
    console.log('formResults: ', formResults);
    // console.log(formResults);

    for (let value of formResults.entries() ){

        console.log(value)
        console.log('value === correctAnswers[index]: ', value === correctAnswers[index]);
            if (value[1] === correctAnswers[index]){
                score += 1;
                
            }
            index += 1;
        }
        console.log(score);
        outputEl.innerText = "Your score is: " +score;
}

submitAnswerButton.addEventListener('click', calculateScore);