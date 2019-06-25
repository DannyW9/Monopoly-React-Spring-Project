import React, {Component} from 'react';
import './App.css';
import Game from './containers/Game'
import PlayerForm from './components/PlayerForm';

class App extends Component {
  render(){
  return (<div>
    <Game />
    <PlayerForm/>
    </div>)
}
}

export default App;
