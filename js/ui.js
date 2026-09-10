import { choiceIcons, maxRounds } from './game-rules.js';

export const elements = {
  screens: {
    start: document.querySelector('#screen-start'),
    game: document.querySelector('#screen-game'),
    result: document.querySelector('#screen-result'),
  },
  startButton: document.querySelector('#start-button'),
  restartButton: document.querySelector('#restart-button'),
  playAgainButton: document.querySelector('#play-again-button'),
  choiceButtons: [...document.querySelectorAll('[data-choice]')],
  playerScore: document.querySelector('#player-score'),
  computerScore: document.querySelector('#computer-score'),
  roundNumber: document.querySelector('#round-number'),
  playerChoiceIcon: document.querySelector('#player-choice-icon'),
  computerChoiceIcon: document.querySelector('#computer-choice-icon'),
  roundMessage: document.querySelector('#round-message'),
  resultIcon: document.querySelector('#result-icon'),
  resultTitle: document.querySelector('#result-title'),
  resultDescription: document.querySelector('#result-description'),
  finalPlayerScore: document.querySelector('#final-player-score'),
  finalComputerScore: document.querySelector('#final-computer-score'),
};

export function showScreen(screenName) {
  Object.entries(elements.screens).forEach(([name, element]) => {
    const isActive = name === screenName;
    element.hidden = !isActive;
    element.classList.toggle('screen--active', isActive);
  });
}

export function focusScreenTitle(screenName) {
  const title = elements.screens[screenName]?.querySelector('h2');
  title?.focus();
}

export function setRoundMessage(message, messageType = '') {
  elements.roundMessage.textContent = message;
  elements.roundMessage.className = 'status-message';
  if (messageType) {
    elements.roundMessage.classList.add(`is-${messageType}`);
  }
}

export function setChoiceButtonsDisabled(disabled) {
  elements.choiceButtons.forEach((button) => {
    button.disabled = disabled;
  });
}

export function updateRoundView(state) {
  elements.playerScore.textContent = String(state.playerScore);
  elements.computerScore.textContent = String(state.computerScore);
  elements.roundNumber.textContent = String(Math.min(state.round + 1, maxRounds));
  elements.playerChoiceIcon.textContent = state.playerChoice
    ? choiceIcons[state.playerChoice]
    : '?';
  elements.computerChoiceIcon.textContent = state.computerChoice
    ? choiceIcons[state.computerChoice]
    : '?';
}

export function resetMatchView() {
  updateRoundView({
    round: 0,
    playerScore: 0,
    computerScore: 0,
    playerChoice: null,
    computerChoice: null,
  });
  setRoundMessage('Escolha um gesto para jogar.');
  setChoiceButtonsDisabled(false);
}

export function showFinalView(state, result) {
  const finalContent = {
    win: {
      icon: '🏆',
      title: 'Você venceu!',
      description: 'Excelente leitura tática. A vitória foi sua!',
    },
    loss: {
      icon: '🤖',
      title: 'A máquina venceu',
      description: 'Foi por pouco. Analise as jogadas e jogue novamente.',
    },
    draw: {
      icon: '🤝',
      title: 'Deu empate!',
      description: 'Equilíbrio total. Uma nova rodada decide o campeão.',
    },
  };

  const content = finalContent[result];
  elements.finalPlayerScore.textContent = String(state.playerScore);
  elements.finalComputerScore.textContent = String(state.computerScore);
  elements.resultIcon.textContent = content.icon;
  elements.resultTitle.textContent = content.title;
  elements.resultDescription.textContent = content.description;
}
