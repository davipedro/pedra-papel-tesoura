export function createInitialState() {
  return {
    screen: 'start',
    round: 0,
    playerScore: 0,
    computerScore: 0,
    playerChoice: null,
    computerChoice: null,
    result: null,
    roundLocked: false,
  };
}

export function resetState(state) {
  Object.assign(state, createInitialState());
}
