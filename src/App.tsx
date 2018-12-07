import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import { HomePage, LeaguesHome, PlayerPage, TeamPage } from "./pages";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/league" component={LeaguesHome} />
          <Route path="/player" component={PlayerPage} />
        </div>
      </Router>
    );
  }
}

export default App;
