export const choices = ['pedra', 'papel', 'tesoura'];
export const maxRounds = 5;
export const winsToFinish = 3;

export const choiceIcons = {
  pedra: '✊',
  papel: '✋',
  tesoura: '✌',
};

export const choiceNames = {
  pedra: 'Pedra',
  papel: 'Papel',
  tesoura: 'Tesoura',
};

export function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

export function getRoundResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  }

  const playerWins =
    (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
    (playerChoice === 'papel' && computerChoice === 'pedra') ||
    (playerChoice === 'tesoura' && computerChoice === 'papel');

  return playerWins ? 'win' : 'loss';
}

export function getRoundMessage(result, playerChoice, computerChoice) {
  const choicesMessage = `Você jogou ${choiceNames[playerChoice]} e a máquina jogou ${choiceNames[computerChoice]}.`;

  if (result === 'win') {
    return `Você venceu a rodada! ${choicesMessage}`;
  }

  if (result === 'loss') {
    return `A máquina venceu a rodada. ${choicesMessage}`;
  }

  return `Empate! ${choicesMessage}`;
}

export function isMatchOver({ playerScore, computerScore, round }) {
  return (
    playerScore >= winsToFinish ||
    computerScore >= winsToFinish ||
    round >= maxRounds
  );
}

export function getFinalResult({ playerScore, computerScore }) {
  if (playerScore > computerScore) {
    return 'win';
  }

  if (playerScore < computerScore) {
    return 'loss';
  }

  return 'draw';
}
