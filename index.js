let square = ""
let squareId = 0
let gameOver = false
let textDisplay = document.getElementById("text")
textDisplay.textContent = "Player One Turn!"
let playerOneTurn = true
const grid = document.querySelector('.grid')
let squaresX = []
let squaresO = []

function createBoard() {
    for (let i = 0; i < 9; i++) {
        square = document.createElement("div")
        square.setAttribute("class", "square")
        square.addEventListener("click", play)
        square.setAttribute("data-id", i)
        grid.appendChild(square)
    }
}

function play() {
  if (!gameOver)  {squareId = this.getAttribute("data-id")
    if (playerOneTurn) {
        this.classList.add("x")
                squaresX.push(squareId)
             if ((squaresX.includes("0") && squaresX.includes("1") && squaresX.includes("2")) ||
             (squaresX.includes("3") && squaresX.includes("4") && squaresX.includes("5")) ||
             (squaresX.includes("6") && squaresX.includes("7") && squaresX.includes("8")) ||
             (squaresX.includes("0") && squaresX.includes("3") && squaresX.includes("6")) ||
             (squaresX.includes("1") && squaresX.includes("4") && squaresX.includes("7")) ||
             (squaresX.includes("2") && squaresX.includes("5") && squaresX.includes("8")) ||
             (squaresX.includes("0") && squaresX.includes("4") && squaresX.includes("8")) ||
             (squaresX.includes("2") && squaresX.includes("4") && squaresX.includes("6"))
             )
{        textDisplay.textContent = "Player One Wins!"
        gameOver = true
        return}
    
        textDisplay.textContent = "Player Two Turn!"
        playerOneTurn = false
        this.removeEventListener("click", play)        
        if (squaresX.length == 5 && squaresO.length == 4) {
            textDisplay.textContent = "It's a Draw!"
        }
    } else if (!playerOneTurn) {
        this.classList.add("o")
                squaresO.push(squareId)
             if ((squaresO.includes("0") && squaresO.includes("1") && squaresO.includes("2")) ||
             (squaresO.includes("3") && squaresO.includes("4") && squaresO.includes("5")) ||
             (squaresO.includes("6") && squaresO.includes("7") && squaresO.includes("8")) ||
             (squaresO.includes("0") && squaresO.includes("3") && squaresO.includes("6")) ||
             (squaresO.includes("1") && squaresO.includes("4") && squaresO.includes("7")) ||
             (squaresO.includes("2") && squaresO.includes("5") && squaresO.includes("8")) ||
             (squaresO.includes("0") && squaresO.includes("4") && squaresO.includes("8")) ||
             (squaresO.includes("2") && squaresO.includes("4") && squaresO.includes("6"))
             )
{        textDisplay.textContent = "Player Two Wins!"
        gameOver = true
        return}

        textDisplay.textContent = "Player One Turn!"
        playerOneTurn = true
        this.removeEventListener("click", play)
    }}
}

createBoard()












