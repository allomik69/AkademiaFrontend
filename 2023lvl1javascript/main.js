let winScore = 0;
let round = 0;

function score() {
    winScore++
}

document.getElementById("playButton").onclick = () => {
    if (round === 0) {
        alert("hra sa začína! rozhodni sa, či toto kolo použiješ nožničky, kameň alebo papier.");
        round++;
    } else {
        alert("hra pokračuje! tvoje skóre je: " + winScore);
    }

    const options = ["nožničky", "kameň", "papier"];
    const computerChoice = options[Math.floor(Math.random() * 3)];
    const userChoice = window.prompt("napíš ktorý objekt si si zvolil (K, P alebo N):");
    const validOptions = ["K", "P", "N"];

    if (!validOptions.includes(userChoice.toUpperCase())) {
        alert("neplatná hodnota");
        return;
    }
    determineWinner(userChoice.toUpperCase(), computerChoice);
};
const determineWinner = (user, computer) => {
    let result = "";
    switch (true) {
        case (computer === "nožničky" && user === "K"):
        case (computer === "kameň" && user === "P"):
        case (computer === "papier" && user === "N"):
            result = "Vyhral si!";
            score();
            break;
        case (computer === "kameň" && user === "K"):
        case (computer === "papier" && user === "P"):
        case (computer === "nožničky" && user === "N"):
            result = "remíza!";
            break;
        case (computer === "papier" && user === "K"):
        case (computer === "nožničky" && user === "P"):
        case (computer === "kameň" && user === "N"):
            result = "Pehral si!";
            break;
    }
    alert(`${result} Počítač si zvolil: ${computer}`);
    console.log("Skóre je: " + winScore);
    console.log(result === "Pehral si!" ? "kolo vyhral počítač." : result === "Vyhral si!" ? "kolo vyhral hráč." : "bola remíza.");
};
