function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
	const size = choices.length;
    const getRandomIndex = Math.floor(Math.random() * size);
    return choices[getRandomIndex];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase(); 
	
	if (
		(playerSelection === "rock" && computerSelection === "Scissors") ||
		(playerSelection === "paper" && computerSelection === "Rock") ||
		(playerSelection === "scissors" && computerSelection === "Paper")
	) {
		playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	} else if (
		(playerSelection === "rock" && computerSelection === "Paper") ||
		(playerSelection === "paper" && computerSelection === "Scissors") ||
		(playerSelection === "scissors" && computerSelection === "Rock")
	) {
		playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);
		return `You Lose! ${computerSelection} beats ${playerSelection}`;
	} else {
		playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);
		return "It's a Tie! Both chose " + playerSelection;
	}
}

function getUserChoice() {
	let userChoice = "";
	while (true) {
		userChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
		
		if (userChoice === null) {
			alert("You cannot exit the game prematurely. Please make a choice.");
			continue;
		}
		
		userChoice = userChoice.toLowerCase().trim();
		
		if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
			return userChoice;
		} else {
			alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
		}
	}
  }

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		const playerSelection = getUserChoice();
		const computerSelection = computerPlay();

		const result = playRound(playerSelection, computerSelection);
		console.log(result);

		if (result.startsWith("You Win!")) {
			playerScore++;
		} else if (result.startsWith("You Lose!")) {
			computerScore++;
		}
	}

	if (playerScore > computerScore) {
		console.log("Congratulations! You win the game.");
	} else if (playerScore < computerScore) {
		console.log("Sorry, you lose the game. Try again.");
	} else {
		console.log("It's a tie game. No winner.");
	}
}

game();
