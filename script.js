// Assignment Code
var generateBtn = document.querySelector("#generate");
//list of characters for the password
var characters = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ".", "/", "?", "-", "+", "=", "_"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Ask the number of password characters and alert if the number is less than 8 or more than 128
function generatePassword() {
  var confirmlength = prompt("how many password characters would you like to use?")
  if (confirmlength < 8 || confirmlength > 128) {
    alert("You have the wrong number of characters")
    return ""
  }
  var possibleChars = []
  var lowercasechoice = confirm("Would you like to include lowercase?")
  var uppercasechoice = confirm("would you like to include Uppercase?")
  var question4 = confirm("would you like to include special characters?")
  var question5 = confirm("would you like to include numbers?")
  // for each choice they hit yes to, you're going to build an array of all possible characters
  // if yes to a question, add onto the possibleChars array hint:
  if (lowercasechoice || uppercasechoice || question4 || question5) {
    if (lowercasechoice) {
      possibleChars = possibleChars.concat(characters.lowercase)
    }
    if (uppercasechoice) {
      possibleChars = possibleChars.concat(characters.uppercase)
    }
    if (question4) {
      possibleChars = possibleChars.concat(characters.question4)
    }
    if (question5) {
      possibleChars = possibleChars.concat(characters.question5)
    }
  }
  // If they answer no to all of the above, alert that they need to select one type of character and return empty 
  else {
    alert("You need to select one type of character")
  }
  // before the for loop have a variable that's an empty string to store the password that will be generated
  var generatePassword = ""
  // build a for loop that loops through the number of characters they want
  for (var index = 0; index < confirmlength; index++) {
    // for each loop, you will generate a random number 0 - possibleChars.length -1, select a random index with possibleChars[randomNumber]
    var random = Math.floor(Math.random() * possibleChars.length);
    // concatenate to the empty variable with += 
    generatePassword += possibleChars[random]
  }
  // return the variable
  return generatePassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
