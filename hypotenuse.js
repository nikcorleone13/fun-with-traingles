const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');


function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    // console.log(sumofSquares);
    return sumOfSquares;

}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares); 

    if ( ( Number(lengthOfHypotenuse) <= Number(sides[0].value))  || ( Number(lengthOfHypotenuse) <= Number(sides[1].value))){
        outputEl.innerText = "Measurements cannot be negative or zero.";

    } else {
        outputEl.innerText = "Hypotenuse length is " + lengthOfHypotenuse;
    }
    // console.log(lengthOfHypotenuse);

}

hypotenuseBtn.addEventListener('click', calculateHypotenuse )