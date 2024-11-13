const ytLink = document.querySelector(".youTubeLink")
const guess = document.querySelector("#submitGuess")
let result = document.querySelector(".lowHigh")
const prev = document.querySelector(".previous")
const remain = document.querySelector(".remaining")
const newGameButton = document.querySelector("#newGame")
let userInput;

ytLink.addEventListener('click', GoToYT)
function GoToYT() {
    location.href = "https://www.youtube.com/watch?v=EGqHVjU-fas&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=35"
}
let prevGuesses = 0;
let remaining = 10;
let game = true
const randomNum = Math.floor((Math.random() * 100) + 1)
if (game) {
    guess.addEventListener("click", (event) => {
        event.preventDefault()
        userInput = parseInt(document.getElementById("guessField").value)
        validateGame()
        calChances()
        reduceChances()
        prevGuess()
        document.getElementById("guessField").value=""
    })


    function validateGame() {
        if (userInput < 0 || userInput > 100 || isNaN(userInput)) {
            result.innerHTML = "<h4>Please Enter the valid input (Number Between 1 to 100)</h4>"
            remaining = remaining + 1;
            remain.innerHTML = `Remaining Guesses: ${remaining}`
            return
        } else {
            if (userInput < randomNum) {
                result.innerHTML = `<h4> Your guess ${userInput} is low </h4>`
            } else if (userInput > randomNum) {
                result.innerHTML = `<h4> Your guess ${userInput} is high </h4>`
            } else if (userInput === randomNum) {
                result.innerHTML = `<h4> Hurray! You guessed it right 👍 </h4>`
                newGameButton.style.display="block"
                guess.disabled = true
            }
        }
    }

    function calChances() {
        if (remaining <= 1) {
            result.innerHTML = "<h4>Game Over! You've used all your guesses.</h4>";
            guess.disabled = true
            newGameButton.style.display="block"
            game = false
        }
    }

    function reduceChances() {
        remaining = remaining - 1;
        remain.innerHTML = `Remaining Guesses: ${remaining}`

    }
    function prevGuess() {
        prevGuesses = userInput
        prev.innerHTML = `Previous Guess ${prevGuesses}`
    }
}
function newGame(){
    prevGuesses = 0;
    remaining = 10;
    prev.innerHTML = `Previous Guess`
    remain.innerHTML = `Remaining Guesses: 10`
    result.style.display = "none"
    guess.disabled = false
    newGameButton.style.display="none"
}
newGameButton.addEventListener("click",newGame)
