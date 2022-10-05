const baseLength = document.querySelectorAll('#base');
const heightLength = document.querySelectorAll('#height');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#output');


function calculateArea(a,b){
    const area =  (a * b)/2;
    console.log(area);
    return area;


}

function printArea(){
    const area = calculateArea ( baseLength.value, heightLength.value);
    outputEl.innerText = "Area is " +area;

}

areaBtn.addEventListener('click', printArea )