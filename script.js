let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Target number
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (numberOne, numberTwo) => Math.abs(numberOne - numberTwo);

// Compare guess, return true if Human win
// whoever closer to the target win, if tie, human win
const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess > 9 || humanGuess < 0) alert('Number out of range!');
    const humanDiff = getAbsoluteDistance(target, humanGuess);
    const computerDiff = getAbsoluteDistance(target, computerGuess);
    if (humanDiff === computerDiff) {
        return true;
    } else if (humanDiff < computerDiff) {
        return true;
    } else {
        return false;
    };
};

// update score
const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;
// advance round
const advanceRound = () => currentRoundNumber++;