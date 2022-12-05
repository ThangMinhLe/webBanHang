"use strict";
// var tongDT =
const progressBar = document.querySelector(".circular__progress--bar");
const progressValue=document.querySelector(".circular__progress--value");
let initValue = 0;
let finalValue = 50 ;
const updateValue = function (){
    if(initValue!== finalValue){
        initValue++;
        progressValue.textContent = `${initValue}%`;
        progressBar.style.backgroundImage= `conic-gradient(#74c0fc,#4dabf7,#339af0 ${3.6 * initValue}deg,#e9ecef 0)`
    }
    else
        clearInterval();
};

setInterval(updateValue,20);

const progressBar2 = document.querySelector(".circular__progress--bar-2");
const progressValue2=document.querySelector(".circular__progress--value-2");
let initValue2 = 0;
let finalValue2 = 50 ;
const updateValue2 = function (){
    if(initValue2!== finalValue2){
        initValue2++;
        progressValue2.textContent = `${initValue2}%`;
        progressBar2.style.backgroundImage= `conic-gradient(#74c0fc,#4dabf7,#339af0 ${3.6 * initValue2}deg,#e9ecef 0)`
    }
    else
        clearInterval();
};

setInterval(updateValue2,20);