var passwordLength = 8;
var choiceArr

var lowerCaseArr = [('a'..'z')];
var upperCaseArr = ['A'..'Z'];
var symbolCharArr = [];
var numbericArr = [];






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function g

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
