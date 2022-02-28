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

var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(", ")', '+', '-', '.', '`', '~', '|', '<', '>', '=', '-', '_'];
var characters = [];


//  2. confirm choices for characters criteria 

  // confirm if user wants to use lowercase, if confirmed, for loop is activated for lowercase characters
  var lowercase = confirm("Would you like to include lowercase characters?");
  if(lowercase === true) {
    for (var i = 0; i < lowerChar.length; i++) {
      characters.push(lowerChar[i]);
    }
  }

    // confirm if user wants to use uppercase, if confirmed, for loop is activated for uppercase characters
    var uppercase = confirm("Would you like to include uppercase characters?");
      if(uppercase === true) {
        for (var i = 0; i < upperChar.length; i++) {
          characters.push(upperChar[i]);
         }
      }

    // confirm if user wants to use numbers, if confirmed, for loop is activated for number characters
    var numbers = confirm("Would you like to include number characters?");
      if(numbers === true) {
        for (var i = 0; i < numberChar.length; i++) {
          characters.push(numberChar[i]);
        }
      }

//  3. generate password based on criteria 
//  4. display password on page



// Add event listener to generate button (keep at bottom of code)
generateBtn.addEventListener("click", writePassword);