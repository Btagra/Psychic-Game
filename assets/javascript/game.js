var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];

function updateWins() {
    document.querySelector("#win").innerHTML = "Wins: " + wins;
}
function updateLosses() {
    document.querySelector("#loss").innerHTML = "Losses: " + losses;
}
updateWins();
updateLosses();

function guessesRemaining() {
    document.querySelector("#left").innerHTML = "Guesses Left: " + guessesLeft;
}
function soFar() {
    document.querySelector("#guesses").innerHTML = "Guesses so far: " + guessChoices;
}
guessesRemaining();
soFar();

var newGame = function () {
    updateWins();
    updateLosses();
    guessesRemaining();
    soFar();
}

document.onkeyup = function (event) {
    var userInput = event.key.toLowerCase();
    var randLetter = Math.floor(Math.random() * (compLetters.length - 0 + 1)) + 0;
    var compChoice = compLetters[randLetter];

    if (guessesLeft > 1) {
        if (userInput === compChoice) {

            guessesLeft = 9;
            wins++;
            guessChoices = [];
            newGame();
        }
        else if (userInput !== compChoice) {
            guessesLeft--;
            guessChoices.push(userInput);
            newGame();
        }
    }
    else {
        guessesLeft = 9;
        losses++;
        guessChoices = [];
        newGame();
    }
}