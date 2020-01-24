// Assignment Code
let passLength = 8


const getCriteria = function () {
  passLength = prompt("Enter a length between 8 and 128")
  useLC = prompt("Would you like to use lower case letters? Enter Y or N")
  useUC = prompt("Would you like to use upper case letters? Enter Y or N")
  useNC = prompt("Would you like to use numeric characters? Enter Y or N")
  useSC = prompt("Would you like to use special characters? Enter Y or N")
  writePassword()
}

const generatePassword = function (passLength) {

    let chars = ''

    if (useLC === 'Y') {
      chars = chars.concat("abcdefghijklmnopqrstuvwxyz")
    }
  if (useUC === 'Y') {
    chars = chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  if (useNC === 'Y') {
    chars = chars.concat("0123456789")
  }
  if (useSC === 'Y') {
    chars = chars.concat("!@#$%^&*()-_<>?/.*+")
  }

  myPass = ""
  for (var i = 0, n = chars.length; i < passLength; ++i) {
    myPass += chars.charAt(Math.floor(Math.random() * n));
  }
  return myPass
}

const writePassword = function () {
  let password = generatePassword(passLength)
  document.getElementById('password').textContent = password
}

document.getElementById('generate').addEventListener("click", getCriteria())