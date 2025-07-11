function generatePassword(length, lowerCase, upperCase, symbols, numbers){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "AABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*\/?";

    let allowedChars = "";
    let genPassword = "";

    allowedChars += lowerCase ? lowercaseChars : "";
    allowedChars += upperCase ? upperCaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";
    
    if(length <= 0) {
        return "(password length must be at least 12)";
    }
    if(allowedChars.length === 0){
        return "(atleast one set of characters must be selected!)";
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length) // 0 - (length - 1);
        genPassword += allowedChars[randomIndex];
    }


    return genPassword;
}

function inputForPassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    const LowerCase = document.getElementById("LowerCase").checked;
    const UpperCase = document.getElementById("UpperCase").checked;
    const Symbols = document.getElementById("Symbols").checked;
    const Numbers = document.getElementById("Numbers").checked;
    const generatedPassword = document.getElementById("generatedPassword");


    generatedPassword.textContent = generatePassword(passwordLength, LowerCase, 
                                        UpperCase, Symbols, 
                                        Numbers);
}