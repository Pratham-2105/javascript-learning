// A simple counter;

const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

incBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

decBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}