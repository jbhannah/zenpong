import React from 'react'

export default class Player extends React.Component {
  render() {
    const { id, player, onPlayerScored } = this.props

    return (
      <div className="player">
        <h1>Player {id + 1}</h1>
        <div className="score">{player.score}</div>
        <div className="score-button">
          <button type="button" onClick={onPlayerScored}>Score!</button>
        </div>
      </div>
    )
  }
}
