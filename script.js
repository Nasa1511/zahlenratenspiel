console.log("Mein Zahlenratespiel funktioniert!");

let computerZahl = Math.floor(Math.random() * 1000) + 1;

let ratenButton = document.getElementById("ratenButton");
let ausgabe = document.getElementById("ausgabe");



ratenButton.addEventListener("click", function() {
  raten();
});



function raten() {
  let spielerZahl = document.getElementById("spielerZahl");
  let tipp = Number(spielerZahl.value)
    if (tipp < computerZahl) {
      ausgabe.textContent = "Meine Zahl war höher.";
    } else if (tipp > computerZahl) {
      ausgabe.textContent = "Meine Zahl war kleiner.";
    } else {
      ausgabe.textContent = "Gewonnen!";
    }
  }
