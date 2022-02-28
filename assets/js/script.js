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

//  1. prompt user for password criteria
//    a. password length 8-128 characters.
//    b. lowercase, uppercase, numbers, special characters
//  2. confirm choices for characters criteria 
//  3. generate password based on criteria 
//  4. display password on page



// Add event listener to generate button (keep at bottom of code)
generateBtn.addEventListener("click", writePassword);