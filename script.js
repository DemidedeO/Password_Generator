// Assignment Code
var generateBtn = document.querySelector("#generate")
//var helperText = {
// charLength: document.querySelector('.helper-text .length'),
// lowercase: document.querySelector('.helper-text .lowercase'),
// uppercase: document.querySelector('.helper-text .uppercase'),
//special: document.querySelector('.helper-text .special')
//};


var password = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  Uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    characters: ["!","@","#","$","%","^","&","*","(",")","<",">",".","/","?","-","+","=","_"],
    number: ["0","1","2","3","4","5","6","7","8","9"],
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var confirmlength = prompt("how many password characters would you like to use?")
if (confirmlength)
var lowercasechoice = prompt("Would you like to include lowercase?")
var Uppercasechoice = prompt("would you like to include Uppercase?")
var question4 = prompt("would you like to include special characters?")
var question5 = prompt("would you like to include numbers?")

//if (lowercasechoice = "no") {
// alert("");

// Write password to the #password input
function writePassword() {



}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
