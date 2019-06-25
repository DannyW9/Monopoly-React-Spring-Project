import React, {Component} from 'react';

class PlayerForm extends Component {


  constructor (props) {
    super(props);
    this.state= {
      playerName: "",
      color: []
    };

    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const playerName = this.state.playerName.trim();
    const color = this.state.color.trim();

    this.props.onPlayerSubmit({playerName: playerName, color:color});
    this.setState({playerName: "", colour: ""});
  }

  handlePlayerNameChange(event) {
    this.setState({playerName: event.target.value});
  }

  handleColorChange(event){
    this.setState({color: event.target.value});
  }
  render() {
    return(

      <form className = "player-form" onsubmit={this.handleSubmit}>
      <input
      type = "text"
      placeholder="player1"
      value={this.state.playerName}
      onChange={this.handlePlayerNameChange}/>
      <input
      type = "text"
      placeholder="select your colour"
      value={this.state.color}
      onChange={this.handleColorChange}/>
      <input type = "submit" value="enter"/>
      </form>
    );
  }
}

export default PlayerForm;
