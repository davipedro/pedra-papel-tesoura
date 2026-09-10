import {
  getComputerChoice,
  getFinalResult,
  getRoundMessage,
  getRoundResult,
  isMatchOver,
} from './game-rules.js';
import { createInitialState, resetState } from './game-state.js';
import {
  elements,
  focusScreenTitle,
  resetMatchView,
  setChoiceButtonsDisabled,
  setRoundMessage,
  showFinalView,
  showScreen,
  updateRoundView,
} from './ui.js';

const state = createInitialState();
let transitionTimer = null;

function clearTransitionTimer() {
  if (transitionTimer !== null) {
    window.clearTimeout(transitionTimer);
    transitionTimer = null;
  }
}

function goToScreen(screenName) {
  state.screen = screenName;
  showScreen(screenName);
  focusScreenTitle(screenName);
}

function resetMatch() {
  clearTransitionTimer();
  resetState(state);
  resetMatchView();
}

function showFinalScreen() {
  const finalResult = getFinalResult(state);
  state.result = finalResult;
  showFinalView(state, finalResult);
  goToScreen('result');
}

function playRound(playerChoice) {
  if (state.roundLocked || state.screen !== 'game') {
    return;
  }

  state.roundLocked = true;
  setChoiceButtonsDisabled(true);
  state.playerChoice = playerChoice;
  state.computerChoice = getComputerChoice();
  state.round += 1;

  const roundResult = getRoundResult(state.playerChoice, state.computerChoice);
  if (roundResult === 'win') {
    state.playerScore += 1;
  } else if (roundResult === 'loss') {
    state.computerScore += 1;
  }

  updateRoundView(state);
  setRoundMessage(
    getRoundMessage(roundResult, state.playerChoice, state.computerChoice),
    roundResult,
  );

  if (isMatchOver(state)) {
    transitionTimer = window.setTimeout(() => {
      transitionTimer = null;
      showFinalScreen();
    }, 850);
    return;
  }

  transitionTimer = window.setTimeout(() => {
    transitionTimer = null;
    state.playerChoice = null;
    state.computerChoice = null;
    state.roundLocked = false;
    updateRoundView(state);
    setRoundMessage('Escolha o próximo gesto para continuar.');
    setChoiceButtonsDisabled(false);
  }, 850);
}

elements.startButton.addEventListener('click', () => {
  resetMatch();
  goToScreen('game');
});

elements.restartButton.addEventListener('click', () => {
  resetMatch();
  goToScreen('start');
});

elements.playAgainButton.addEventListener('click', () => {
  resetMatch();
  goToScreen('game');
});

elements.choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.dataset.choice);
  });
});
