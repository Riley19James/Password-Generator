
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbolChar = "!@#$%^&*-+";
var numberic = "0123456789";


var characters = "";


var generateBtn = document.querySelector("#generate");

function generatePassword() {
 
  var passwordLength = prompt("password Length within 8-128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("password MUST be within 8-128 characters");
    console.log("Not Valid Password");
  } else {
    possiblities();
    var password = "";
    for (var i = 0; i <passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
}


function possiblities() {
  characters = "";
  var lowerCasev2 = confirm("Do you want lowerCase?");
  var upperCasev2 = confirm("Do you want uppercase?");
  var symbolCharv2 = confirm("Do you want symbols?");
  var numbericv2 = confirm("Do you want numbers?");
  
  if (lowerCasev2) {
    characters += lowerCase;
    console.log(characters);
  }

  if (upperCasev2) {
    characters += upperCase;
    console.log(characters);
  }

  if (symbolCharv2) {
    characters += symbolChar;
    console.log(characters);
  }

  if (numbericv2) {
    characters += numberic;
    console.log(characters);
  }

  if (characters ==="") {
    alert("Please include one of valid chracter types.");
    possiblities();
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


 generateBtn.addEventListener("click", writePassword);
