import undoable from 'redux-undo'

const newPlayer = {
  score: 0
}

const player = (state, action) => {
  switch (action.type) {
    case 'PLAYER_SCORED':
      return {
        ...state,
        score: state.score + 1
      }
    default:
      return state
  }
}

const newGame = {
  players: [newPlayer, newPlayer]
}

const game = (state = newGame, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return newGame
    case 'PLAYER_SCORED':
      return {
        ...state,
        players: state.players.map((p, id) => {
          if (id !== action.id) {
            return p
          }

          return player(p, action)
        })
      }
    default:
      return state
  }
}

export default undoable(game)
