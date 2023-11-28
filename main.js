let round = 0
let pcScore = 0
let userScore = 0
let counter = {
    k: 0,
    n: 0,
    p: 0
}

let history = []
const options = ["N", "K", "P"]
const validOptions = ["K", "P", "N"]

document.getElementById("playButton").onclick = () => {

    const computerChoice = options[Math.floor(Math.random() * 3)]
   
    if (round === 0) 
    {
        alert("hra sa začína! rozhodni sa, či toto kolo použiješ nožničky, kameň alebo papier.")
        round++
    } 
    else 
    {
        alert("hra pokračuje! tvoje skóre je: " + userScore)
        round++
    }

    let userChoice;
    do {
    userChoice = prompt("napíš ktorý objekt si si zvolil (K, P alebo N):")
    } while (!validOptions.includes(userChoice.toUpperCase()));

    


    determineWinner(userChoice.toUpperCase(), computerChoice)
}

function determineWinner(user, computer) 
{
    let result = ""

    switch (true) {
        case (computer === "N" && user === "K"):
        case (computer === "K" && user === "P"):
        case (computer === "P" && user === "N"):
            result = "Vyhral si!"
            userScore++
            break
        case (computer === "K" && user === "K"):
        case (computer === "P" && user === "P"):
        case (computer === "N" && user === "N"):
            result = "remíza!"
            break
        case (computer === "P" && user === "K"):
        case (computer === "N" && user === "P"):
        case (computer === "K" && user === "N"):
            pcScore++
            result = "Pehral si!"
            break
    }
    switch (user) {
        case "K":
            counter.k++
            break
        case "N":
            counter.n++
            break
        case "P":
            counter.p++
            break
    }
    alert(`${result} Počítač si zvolil: ${computer}`)

    console.clear()
    history.push(result === "Pehral si!" ? " kolo vyhral počítač " : result === "Vyhral si!" ? " kolo vyhral hráč " : " bola remíza ")
    let displayHistory = history.join('<br>')
    document.getElementById("displayHistory").innerHTML = displayHistory



    console.log(counter)
    
    document.getElementById("displayUserScore").innerHTML = userScore 
    document.getElementById("displayPcScore").innerHTML = pcScore 

    if (userScore == 5 )
    {    
        // counter = {
        //     k: 0,
        //     n: 0,
        //     p: 0
        // }
        // history = []
        // round = 0
        // pcScore = 0
        // userScore = 0
        alert("Hra skončila. Vyhral si!")
        // neviem ci je ok ak to takto zjednodusim , pre istotu je vyssie kod bez reloadu.
        location.reload()
    } 
    else if (pcScore == 5 )
    {
        // counter = {
        //     k: 0,
        //     n: 0,
        //     p: 0
        // }
        // history = []
        // round = 0
        // pcScore = 0
        // userScore = 0
        alert("Hra skončila. Vyhral počítač!")
        // neviem ci je ok ak to takto zjednodusim , pre istotu je vyssie kod bez reloadu.
        location.reload()
    }
}
