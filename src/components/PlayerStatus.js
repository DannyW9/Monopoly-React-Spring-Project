import React, {Component} from 'react';

class PlayerStatus extends Component{

constructor(props){
  super(props);


}



  render() {
    return(
      <div>

      <div><span>{this.props.players[0].name}  {this.props.players[0].money}</span></div>
      <div><span>{this.props.players[0].colour}</span></div>
      <div><span>{this.props.players[0].activePlayer}</span></div>
      </div>

    );


}
}

export default PlayerStatus
