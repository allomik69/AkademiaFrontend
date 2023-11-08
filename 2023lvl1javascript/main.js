document.getElementById("playButton").onclick = function () {
    alert("hra sa začína! rozhodni sa , či toto kolo použijieš nožničky , kameň alebo papier.");
    const options = ["nožničky", "kameň", "papier"];
    const computerChoice = options[Math.floor(Math.random() * 3)];
    const userChoice = window.prompt("napíš ktorý objekt si si zvolil (K, P alebo N):");
    const validOptions = ["K", "P", "N"];

    if (computerChoice == "nožničky" && userChoice.toUpperCase() == "K") {
        alert("Vyhral si! Počítač si zvolil: " + computerChoice);
    }
    else if (computerChoice == "kameň" && userChoice.toUpperCase() == "P") {
        alert("Vyhral si! Počítač si zvolil: " + computerChoice);
    }
    else if (computerChoice == "papier" && userChoice.toUpperCase() == "N") {
        alert("Vyhral si! Počítač si zvolil: " + computerChoice);
    }
    else if (computerChoice == "nožničky" && userChoice.toUpperCase() == "P") {
        alert("Pehral si! Počítač si zvolil: " + computerChoice)
    }
    else if (computerChoice == "kameň" && userChoice.toUpperCase() == "N") {
        alert("Pehral si! Počítač si zvolil: " + computerChoice)
    }
    else if (computerChoice == "papier" && userChoice.toUpperCase() == "K") {
        alert("Pehral si! Počítač si zvolil: " + computerChoice)
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


};