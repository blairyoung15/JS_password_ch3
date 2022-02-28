// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function to generate password (var password = generatePassword)
function generatePassword() {
//  1. prompt user for password criteria
//    a. password length 8-128 characters.
var length = prompt("Choose the length of your password (between 8-128 characters)", 8);
    if (length < 8 || length > 128 || isNaN(length) === true) {
        alert("Please enter a length between 8-128 characters");
        return;
  }
//    b. lowercase, uppercase, numbers, special characters
//  2. confirm choices for characters criteria 
//  3. generate password based on criteria 
//  4. display password on page



// Add event listener to generate button (keep at bottom of code)
generateBtn.addEventListener("click", writePassword);