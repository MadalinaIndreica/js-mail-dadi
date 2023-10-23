const usersEmail = ["paola12@yahoo.it", "alberto13@gmail.com","Marco@yahoo.it"]
console.log(usersEmail);
const newUserEmail = prompt ("ciao utente! qual'è la tua mail?")
console.log(newUserEmail);
let found = false;
for (let i = 0; i < usersEmail.length; i++){
    const curEmail = usersEmail[i];
    if (curEmail === newUserEmail) {
        found = true;
    }
}
if (found){
    console.log ("La tua mail è presente nella lista,puoi accedere!")
} else {
    console.log("mi dispiace,non riesco a trovare la tua mail nella nostra lista utenti, prova con un'altra!");
}