import React from 'react'

export default class Player extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (e.shiftKey && e.location - 1 === this.props.id) {
        this.props.onPlayerScored()
      }
    })
  }

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
