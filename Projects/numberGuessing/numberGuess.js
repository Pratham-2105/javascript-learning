const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1));

let answer;
let attempts = 0;
let running = true;


while(running){
    answer = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    answer = Number(answer);

    if(isNaN(answer)) {
        window.alert("Please enter a valid number!");
    }
    else if(answer < minNum || answer > maxNum) {
        window.alert("Please enter a valid number!");
    }
    else {
        attempts++;
        if(answer < randomNum){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(answer > randomNum) {
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The answer was ${randomNum}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}