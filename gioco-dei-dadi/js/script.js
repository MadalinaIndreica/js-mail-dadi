const userNumber = (Math.floor(Math.random() * 6)) + 1;
  console.log(userNumber);
const computerNumber = (Math.floor(Math.random() * 6)) + 1;
  console.log(computerNumber);
if (userNumber === computerNumber){
    console.log ("è un pareggio,riprova!")
}
else if (userNumber > computerNumber) {
    console.log("User hai vinto! il tuo numero è più alto.");

} else {
    console.log ("mi dispiace ha vinto il Computer! il suo numero è più alto.");
}