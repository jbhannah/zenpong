import React from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions'

@connect()
export default class NewGame extends React.Component {
  render() {
    const { dispatch } = this.props

    return (
      <div className="new-game-button">
        <button type="button" onClick={() => dispatch(newGame)}>New Game</button>
      </div>
    )
  }
}
