document.addEventListener('DOMContentLoaded', () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const gameResultDisplay = document.getElementById('game-result');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const tiesDisplay = document.getElementById('ties');

    // Initialize session storage scores
    sessionStorage.setItem('wins', sessionStorage.getItem('wins') || 0);
    sessionStorage.setItem('losses', sessionStorage.getItem('losses') || 0);
    sessionStorage.setItem('ties', sessionStorage.getItem('ties') || 0);

    // Update scoreboard from session storage
    const updateScoreboard = () => {
        winsDisplay.textContent = sessionStorage.getItem('wins');
        lossesDisplay.textContent = sessionStorage.getItem('losses');
        tiesDisplay.textContent = sessionStorage.getItem('ties');
    };

    updateScoreboard();

    // Function to get a random computer choice
    const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

    // Function to play the game
    const playGame = (playerChoice) => {
        const computerChoice = getComputerChoice();
        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;

        // Determine the winner using conditional statements
        if (playerChoice === computerChoice) {
            gameResultDisplay.textContent = 'It\'s a Tie!';
            sessionStorage.setItem('ties', parseInt(sessionStorage.getItem('ties')) + 1);
        } else if (
            (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
            (playerChoice === 'Paper' && computerChoice === 'Rock') ||
            (playerChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            gameResultDisplay.textContent = 'You Win!';
            sessionStorage.setItem('wins', parseInt(sessionStorage.getItem('wins')) + 1);
        } else {
            gameResultDisplay.textContent = 'You Lose!';
            sessionStorage.setItem('losses', parseInt(sessionStorage.getItem('losses')) + 1);
        }

        // Update the scoreboard
        updateScoreboard();
    };

    // Add event listeners to buttons
    document.getElementById('rock').addEventListener('click', () => playGame('Rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('Paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('Scissors'));
});

