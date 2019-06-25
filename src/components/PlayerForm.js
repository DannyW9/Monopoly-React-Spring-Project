import React, {Component} from 'react';

class PlayerForm extends Component {


  constructor (props) {
    super(props);
    this.state= {
      playerName: "",
      color: ["blue", "red", "orange", "green"]
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

    const colorOptions = this.state.color.map((color, index) => {
      return<option key={index} value={color}>{color}</option>

    })

    return(

      <form className = "player-form" onsubmit={this.handleSubmit}>
      <div>
      <input
      type = "text"
      placeholder="player1"
      value={this.state.playerName}
      onChange={this.handlePlayerNameChange}/>
      <select>
      {colorOptions}
      </select>
      </div>

      <div><input
      type = "text"
      placeholder="player2"
      value={this.state.playerName}
      onChange={this.handlePlayerNameChange}/>
      <select>
      {colorOptions}
      </select></div>

      <div><input
      type = "text"
      placeholder="player3"
      value={this.state.playerName}
      onChange={this.handlePlayerNameChange}/>
      <select>
      {colorOptions}
      </select></div>

      <div><input
      type = "text"
      placeholder="player4"
      value={this.state.playerName}
      onChange={this.handlePlayerNameChange}/>
      <select>
      {colorOptions}
      </select></div>


      <input type = "submit" value="enter"/>
      </form>
    );
  }
}

export default PlayerForm;
