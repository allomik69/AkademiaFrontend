var winScore = 0;
var kolo = 0;
function score() {
    winScore++;
}
document.getElementById("playButton").onclick = function () {
    if (kolo == 0) {
        alert("hra sa začína! rozhodni sa , či toto kolo použijieš nožničky , kameň alebo papier.");
        kolo++;
    } else {
        alert("hra pokračuje ! tvoje skóre je: " + winScore);
    }
    const options = ["nožničky", "kameň", "papier"];
    var computerChoice = options[Math.floor(Math.random() * 3)];
    const userChoice = window.prompt("napíš ktorý objekt si si zvolil (K, P alebo N):");
    const validOptions = ["K", "P", "N"];
    var computerWon = 0;

    if (computerChoice == "nožničky" && userChoice.toUpperCase() == "K") {
        alert("Vyhral si! Počítač si zvolil: " + computerChoice);
        score();
        computerWon = 1;
    }
    else if (computerChoice == "kameň" && userChoice.toUpperCase() == "P") {
        alert("Vyhral si! Počítač si zvolil: " + computerChoice);
        computerWon = 1;
        score();
    }
    else if (computerChoice == "papier" && userChoice.toUpperCase() == "N") {
        alert("Vyhral si! Počítač si zvolil: " + computerChoice);
        computerWon = 1;
        score();
    }
    else if (computerChoice == "nožničky" && userChoice.toUpperCase() == "P") {
        alert("Pehral si! Počítač si zvolil: " + computerChoice)
        computerWon = 2;
    }
    else if (computerChoice == "kameň" && userChoice.toUpperCase() == "N") {
        alert("Pehral si! Počítač si zvolil: " + computerChoice)
        computerWon = 2;
    }
    else if (computerChoice == "papier" && userChoice.toUpperCase() == "K") {
        alert("Pehral si! Počítač si zvolil: " + computerChoice)
        computerWon = 2;
    }
    else if (computerChoice == "kameň" && userChoice.toUpperCase() == "K") {
        alert("remíza ! Počítač si zvolil: " + computerChoice)
    }
    else if (computerChoice == "papier" && userChoice.toUpperCase() == "P") {
        alert("remíza ! Počítač si zvolil: " + computerChoice)
    }
    else if (computerChoice == "nožničky" && userChoice.toUpperCase() == "N") {
        alert("remíza ! Počítač si zvolil: " + computerChoice)
    }
    else if (!validOptions.includes(userChoice.toUpperCase())) {
        alert("neplatná hodnota")
    }

    console.log("Skóre je: " + winScore);

    if (computerWon == 2) {
        console.log("kolo vyhral počítač.")
    }
    else if (computerWon == 1) {
        console.log("kolo vyhral hráč.")
    }
    else {
        console.log("bola remíza.")
    }

};

