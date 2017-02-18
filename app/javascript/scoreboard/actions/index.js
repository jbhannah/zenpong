export const newGame = {
  type: 'NEW_GAME'
}

export const playerScored = (id) => ({
  type: 'PLAYER_SCORED',
  id
})
