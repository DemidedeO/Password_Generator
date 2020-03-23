// Assignment Code
//var generateBtn = document.querySelector("#generate")
//var helperText = {
 // charLength: document.querySelector('.helper-text .length'),
 // lowercase: document.querySelector('.helper-text .lowercase'),
 // uppercase: document.querySelector('.helper-text .uppercase'),
  //special: document.querySelector('.helper-text .special')
//};


var password = {
  lowercase: ["abcdefghijklmnopqrstuvwxyz"],
  Uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  characters: ["!@#$%^&*()<>./?`"],
  number: ["0123456789"],
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var confirmlength = confirm("Password will be 8 to 128 characters")
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
