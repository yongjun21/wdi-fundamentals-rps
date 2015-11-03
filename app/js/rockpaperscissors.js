////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log('');
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var p;
    var c;
    switch(playerMove) {
        case "rock":
            p=1;
            break;
        case "paper":
            p=2;
            break;
        case "scissors":
            p=3;
            break;
    }
    switch(computerMove) {
        case "rock":
            c=4;
            break;
        case "paper":
            c=5;
            break;
        case "scissors":
            c=6;
            break;
    }
    if(!(p && c)) {return "invalid";}
    switch((c-p)%3) {
        case 1:
            winner="computer";
            break;
        case 2:
            winner="player";
            break;
        default:
            winner="tie";
    }
    return winner;
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var playerMove;
    var computerMove;
    while(playerWins < x && computerWins < x) {
        playerMove=getPlayerMove();
        computerMove=getComputerMove();
        switch(getWinner(playerMove,computerMove)) {
            case "player":
                playerWins++;
                break;
            case "computer":
                computerWins++;
                break;
            case "invalid":
                console.log('Invalid move, try again.');
                continue;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    }
    return [playerWins, computerWins];
}

function playToFive() {
    return playTo(5);
}
