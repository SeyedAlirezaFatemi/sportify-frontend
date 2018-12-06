import * as React from 'react';
import './App.css';
import {LiveEvents, LiveEvent, Field2D, Field3D, PlayerDetails, GameStats, TeamsTable, FieldPlay} from 'sport-stats';
import GamePage from "./pages/GamePage/GamePage";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import HomePage from "./pages/HomePage/HomePage";


class App extends React.Component {
  public render() {
    return (<GamePage />);
  }
}

export default App;
