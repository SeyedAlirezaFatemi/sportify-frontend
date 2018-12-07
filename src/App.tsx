import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import { HomePage, LeaguesHome, TeamPage } from "./pages";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/league" component={LeaguesHome} />
        </div>
      </Router>
    );
  }
}

export default App;
