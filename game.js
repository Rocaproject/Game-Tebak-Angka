let playerName = "";
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    if (!playerName) {
        playerName = document.getElementById("playerName").value.trim();
        if (!playerName) {
            alert("Please enter your name.");
            return;
        }
        document.getElementById("playerName").disabled = true;
    }

    const guess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Please enter a number between 1 and 100", "black");
        return;
    }

    attempts++;

    if (guess < secretNumber) {
        setMessage("Too low. Try again!", "blue");
    } else if (guess > secretNumber) {
        setMessage("Too high. Try again!", "orange");
    } else {
        setMessage(`Congratulations, ${playerName}! You guessed the number ${secretNumber} correctly in ${attempts} attempts.`, "green");
        document.getElementById("guessInput").disabled = true;
        document.querySelector("button").disabled = true;
    }
}

function setMessage(msg, color) {
    document.getElementById("message").style.color = color;
    document.getElementById("message").innerText = msg;
}
