let round = 0
let pcScore = 0
let userScore = 0
let counter = {
    k: 0,
    n: 0,
    p: 0
}
let history = []

document.getElementById("playButton").onclick = () => {

    const options = ["nožničky", "kameň", "papier"]
    const computerChoice = options[Math.floor(Math.random() * 3)]
    const validOptions = ["K", "P", "N"]

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
    
    const userChoice = prompt("napíš ktorý objekt si si zvolil (K, P alebo N):")

    if (!validOptions.includes(userChoice.toUpperCase())) 
    {
        alert("neplatná hodnota")
        if ( round <= 2)
        {
        round--
        }
        return
    }

    determineWinner(userChoice.toUpperCase(), computerChoice)
}

function determineWinner(user, computer) 
{
    let result = ""

    switch (true) {
        case (computer === "nožničky" && user === "K"):
        case (computer === "kameň" && user === "P"):
        case (computer === "papier" && user === "N"):
            result = "Vyhral si!"
            userScore++
            break
        case (computer === "kameň" && user === "K"):
        case (computer === "papier" && user === "P"):
        case (computer === "nožničky" && user === "N"):
            result = "remíza!"
            break
        case (computer === "papier" && user === "K"):
        case (computer === "nožničky" && user === "P"):
        case (computer === "kameň" && user === "N"):
            pcScore++
            result = "Pehral si!"
            break
    }

    if (user === "K") 
    {
        counter.k++
    }
    else if (user === "N") 
    {
        counter.n++
    }
    else if (user === "P") 
    {
        counter.p++
    }
    alert(`${result} Počítač si zvolil: ${computer}`)

    console.clear()

    history.push(result === "Pehral si!" ? " kolo vyhral počítač " : result === "Vyhral si!" ? " kolo vyhral hráč " : " bola remíza ")
    let displayHistory = history.join('<br>')
    document.getElementById("displayHistory").innerHTML = displayHistory

    console.log(counter)
    
    document.getElementById("displayUserScore").innerHTML = userScore 
    document.getElementById("displayPcScore").innerHTML = pcScore 
}
