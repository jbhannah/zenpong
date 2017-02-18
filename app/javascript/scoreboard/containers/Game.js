import React from 'react'
import { connect } from 'react-redux'
import { playerScored } from '../actions'
import Player from '../components/Player'

const mapStateToProps = (state) => ({
  players: state.present.players
})

const mapDispatchToProps = ({
  onPlayerScored: playerScored
})

@connect(mapStateToProps, mapDispatchToProps)
export default class Game extends React.Component {
  render() {
    const { players, onPlayerScored } = this.props

    return (
      <div className="game">
        {players.map((player, id) =>
          <Player
            key={id}
            id={id}
            player={player}
            onPlayerScored={() => onPlayerScored(id)}
          />
        )}
      </div>
    )
  }
}
