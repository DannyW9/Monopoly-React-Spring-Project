import React, {Component} from 'react';

class PlayerStatus extends Component{

constructor(props){
  super(props);
}

  generatePlayerStatusElements(player, activePlayer){
    if(activePlayer){
      return(
        <div key={player.name}>
        <div style={{backgroundColor : player.color}}><span>{player.name}  £{player.money}</span></div>
        <div style={{backgroundColor : player.color}}><span>{player.colour}</span></div>
        </div>
      )
    }else{
      return(
        <div key={player.name}>
        <div><span>{player.name}  £{player.money}</span></div>
        <div><span>{player.colour}</span></div>
        </div>
      )
    }
  }

  render() {

    const players = this.props.players.map((player) => {
        let activePlayerBool = player == this.props.activePlayer
        return this.generatePlayerStatusElements(player,activePlayerBool)
    })

    return(
      <div className="playerStatus">
      {players}
      </div>

    );


}
}

export default PlayerStatus
