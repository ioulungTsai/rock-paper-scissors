function getComputerChoice() {
  const randomModNum = (Math.round(Math.random() * 100)) % 3
  const arr = ['rock', 'paper', 'scissors']
  return arr[randomModNum]
}

function playRound(playerSelection, computerSelection) {
  let lowercaseSelection = playerSelection.toLowerCase()
  const result = {
    rock: {
      rock: 'Tie! Try again!',
      paper: 'You Lose! Paper covers rock.',
      scissors: 'You Win! Rock beats Scissors.'
    },
    paper: {
      paper: 'Tie! Try again!',
      scissors: 'You Lose! Scissors cut paper.',
      rock: 'You Win! Paper covers rock.'
    },
    scissors: {
      scissors: 'Tie! Try again!',
      paper: 'You Win! Scissors cut paper.',
      rock: 'You Lose! Rock beats Scissors.'
    }
  }

  return result[lowercaseSelection][computerSelection]
}

function game() {
  let playerScore = 0
  let computerScore = 0
  for(let i = 0; i < 5; i++) {
    const playerSelection = "ROCK"
    const computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection)
    if(result.includes('Nice')) {
      playerScore += 1
      computerScore += 1
    } else if (result.includes('Lose')) {
      computerScore += 1
    } else {
      playerScore += 1
    }
    console.log(result)
  }

  if(playerScore >= computerScore) {
    console.log('You Cheat!!')
  } else {
    console.log('Ha Ha Ha ... Loserrrr')
  }
}

// game()
