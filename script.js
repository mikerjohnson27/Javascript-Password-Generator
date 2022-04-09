//All varables used for this program.

let charactorLength = 8;
let fillArr = [];

const specialCharAr = ['!','@','#','$','<',')','(',':','%','*','-','+',',','=','>','.','?','|',];
const lowerAr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];;
const upperAr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberAr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
//This is what conects the javascript to the html button.
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button.
//This is conected to the Button to run the generate password function.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//This is the function that is run when you use click the button.
function writePassword() {
    let correctPropts = prompts(); //This makes sure the propts are correct. And is conected to the propts function.
    let passwordText = document.querySelector("#password") //This places the generated password in the box.
    if (correctPropts){
      let newPassword = generatePassword();
      let passwordText = document.querySelector("#password");

      passwordText.value = newPassword;
    }else{
      passwordTest.value = "";
    }
  };
//This function makes the password random.
function generatePassword(){
  let password = "";
  for(let i = 0; i < charactorLength; i++){
      let randomIndex = Math.floor(Math.random() * charactorLength);
      password = password + fillArr[randomIndex];
  }
      return password;
}
//This runs the propts for what you want in the password and adds them to the writePassword function.
function prompts(){
  fillArr = [];
  charactorLength = parseInt(prompt("How long would you like your pass word to be? 8 - 130 characters? "))

  if (isNaN(charactorLength) || charactorLength < 8 || charactorLength > 130){
    alert("Length must me a number and not typed out for this program to work!!");
    return false;
  }
  if (confirm("Would you like special characers in your password?")) {
    fillArr = fillArr.concat(specialCharAr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    fillArr = fillArr.concat(upperAr);
  }
  if (confirm("Would you like numbers in your password?")) {
    fillArr = fillArr.concat(numberAr);
  }
  if (confirm("Would you like lowercase letters in your password?")){
    fillArr = fillArr.concat(lowerAr);
  }
  return true;
}