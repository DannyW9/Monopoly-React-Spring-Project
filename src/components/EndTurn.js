import React, {Component} from 'react';

class EndTurn extends Component {

  constructor(props){
    super(props)

    this.handleEndTurnClick = this.handleEndTurnClick.bind(this)
  }

  handleEndTurnClick(){
    this.props.updateActivePlayer()
  }

  render(){
    return(
      <button className="endTurnButton" onClick={this.handleEndTurnClick}> End Turn </button>
    )
  }

}

export default EndTurn
