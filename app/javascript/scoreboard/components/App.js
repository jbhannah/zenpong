import React from 'react'
import Game from '../containers/Game'
import NewGame from '../containers/NewGame'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Game />
        <NewGame />
      </div>
    )
  }
}
