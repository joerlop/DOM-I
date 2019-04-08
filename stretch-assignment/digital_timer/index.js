
let msTensNumber = document.querySelector("#msTens");
let msHundredsNumber = document.querySelector("#msHundreds");
let secondsNumber = document.querySelector("#secondOnes");
let tensSecondsNumber = document.querySelector("#secondTens");
let timerNumbers = document.querySelectorAll(".digit");

function timer() {
    msTensNumber.textContent = "0";
    msHundredsNumber.textContent = "0";
    secondsNumber.textContent = "0";
    tensSecondsNumber.textContent = "0";    

    let msTens = setInterval(tens, 10);
    let msHundreds = setInterval(hundreds, 100);
    let seconds = setInterval(fSeconds, 1000);
    let tensSeconds = setInterval(fTensSeconds, 10000);

    function tens() {
        msTensNumber.textContent = +msTensNumber.textContent + 1;
    }
    
    function hundreds() {
        msTensNumber.textContent = "0";
        msHundredsNumber.textContent = +msHundredsNumber.textContent + 1;
    }
    
    function fSeconds() {
        msHundredsNumber.textContent = "0";
        secondsNumber.textContent = +secondsNumber.textContent + 1;
    }
    
    function fTensSeconds() {
        clearInterval(msTens);
        msTensNumber.textContent = "0";
    
        clearInterval(msHundreds);
        msHundredsNumber.textContent = "0";
    
        clearInterval(seconds);
        secondsNumber.textContent = "0";
        
        tensSecondsNumber.textContent = +tensSecondsNumber.textContent + 1;
        clearInterval(tensSeconds);
    
        timerNumbers.forEach(item => item.style.color = "red");
    }
}
  


// Stretch on Stretch
let btn = document.createElement("button");
btn.textContent = "Go!";
btn.style.background = "white";
btn.style.border = "1px solid black";
btn.style.borderRadius = "2px";

let content = document.querySelector("body");

content.style.flexDirection = "column";

content.appendChild(btn);

btn.addEventListener("click", function() {
    timer();
});
