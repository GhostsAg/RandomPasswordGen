var arraySpecial = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
var arrayUpper = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var arrayNumbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
var arrayLower = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
var specs = false;
var uppers = false;
var nums = false;
var passWordLenght;
var numChars;

function authenticateLenght() {
    if (parseInt(numChars) < 8 || parseInt(numChars) > 128 || parseInt(numChars) === NaN) {
        alert("Password should be atleast 8 characters long but no longer than 128.");
    }
    else {
        return parseInt(numChars);
    }
}

function criteria() {
    specs = confirm("Special characters?");
    uppers = confirm("Upper case?");
    nums = confirm("Numbers?");
}


function generatePassword() {
    
    criteria();
    numChars = prompt("Enter the length of the password.");
    passWordLenght = authenticateLenght();
    let charArray = new Array();
    let tempArray = new Array();
    var pass = "";
    
    if (specs && !uppers && !nums) {

        charArray = arrayLower.concat(arraySpecial);
        for (let i=0; i<passWordLenght; i++){
            
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            tempArray.push(char);
        }
        pass = String.fromCharCode.apply(null, tempArray);  
    }
    else if (!specs && uppers && !nums){

        charArray = arrayLower.concat(arrayUpper);
        for (let i=0; i<passWordLenght; i++){
            
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            tempArray.push(char);
        }
        pass = String.fromCharCode.apply(null, tempArray);
    }
    else if (!specs && !uppers && nums) {

        charArray = arrayLower.concat(arrayNumbers);
        for (let i=0; i<passWordLenght; i++){
            
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            tempArray.push(char);
        }
        pass = String.fromCharCode.apply(null, tempArray);
    }
    else if (specs && uppers && !nums){
        
        charArray = arrayLower.concat(arraySpecial, arrayUpper);
        for (let i=0; i<passWordLenght; i++){
            
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            tempArray.push(char);
        }
        pass = String.fromCharCode.apply(null, tempArray);
    }
    else if (specs && !uppers && nums){

        charArray = arrayLower.concat(arraySpecial, arrayNumbers);
        for (let i=0; i<passWordLenght; i++){
            
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            tempArray.push(char);
        }
        pass = String.fromCharCode.apply(null, tempArray);
    }
    else if (!specs && uppers && nums){

        charArray = arrayLower.concat(arrayNumbers, arrayUpper);
        for (let i=0; i<passWordLenght; i++){
            
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            tempArray.push(char);
        }
        pass = String.fromCharCode.apply(null, tempArray);
    }
    else if (!specs && !uppers && !nums){

        charArray = arrayLower;
        for (let i=0; i<passWordLenght; i++){
            
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            tempArray.push(char);
        }
        pass = String.fromCharCode.apply(null, tempArray);
    }
    else {
        for (let i=0; i<passWordLenght; i++){
            var char = Math.floor(Math.random()*92);
            tempArray.push(char+32);
        }

        pass = String.fromCharCode.apply(null, tempArray);
    }
    return pass;
}
        
// Assignment Code
var $generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
$generateBtn.addEventListener("click", writePassword);












