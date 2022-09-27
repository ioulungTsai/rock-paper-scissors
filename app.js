let rockCount
let paperCount
let scissorsCount

// below getComputerChoice function make "Scissors" dominant
function getComputerChoice() {
  let arr = ['Rock', 'Paper', 'Scissors']
  let choise = arr[Math.round(Math.random()*2)]
  return choise
}

function doTenThousandTimes() {
  rockCount = 0
  paperCount = 0
  scissorsCount = 0
  for(let i = 0; i < 10000; i++) {
    const result = getComputerChoice()
    if(result === 'Rock') {
      rockCount++
    } else if(result === 'Paper') {
      paperCount++
    } else {
      scissorsCount++
    }
  }
  console.log('Rock total', rockCount, 'Paper total', paperCount,'Scissors total', scissorsCount)
}

for(let i = 0; i < 10; i++) {
  doTenThousandTimes()
}

function playRound(playerSelection, computerSelection) {
  let lowercaseSelection = playerSelection.toLowerCase()

  if(lowercaseSelection !== 'rock' && lowercaseSelection !== 'paper' && lowercaseSelection !== 'scissors') {
    return "You should take the responsibility to choose the only three choices!"
  }
  if(lowercaseSelection === 'rock') {
    if(computerSelection === 'Rock') {
      return 'Nice try!'
    } else if (computerSelection === 'Paper') {
      return 'You Lose! Paper beats Rock! HaHa!'
    } else {
      return 'You Win! blah Blah blah ...'
    }
  }
  if(lowercaseSelection === 'paper') {
    if(computerSelection === 'Rock') {
      return 'You Win! blah Blah blah ...'
    } else if (computerSelection === 'Paper') {
      return 'Nice try!'
    } else {
      return 'You Lose! Scissors beats Paper! HaHa!'
    }
  }
  if(lowercaseSelection === 'scissors') {
    if(computerSelection === 'Rock') {
      return 'You Lose! Rock beats Scissors! HaHa!'
    } else if (computerSelection === 'Paper') {
      return 'You Win! blah Blah blah ...'
    } else {
      return 'Nice try!'
    }
  }
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
