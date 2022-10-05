const baseLength = document.querySelector('#base');
const heightLength = document.querySelector('#height');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#output');


function calculateArea(a,b){
    const area =  (a * b)/2;
    console.log(area);
    return area;


}

function printArea(){
    const area = calculateArea ( Number(baseLength.value), Number(heightLength.value));
    outputEl.innerText = "Area is " +area;

}

areaBtn.addEventListener('click', printArea )