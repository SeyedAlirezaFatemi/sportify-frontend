import * as React from 'react';
import './App.css';
import { TeamPage } from "./pages";
import GameTimeLine from "./components/GameTimeLine/GameTimeLine";


class App extends React.Component {
  public render() {
    return (<GameTimeLine/>);
  }
}

export default App;
