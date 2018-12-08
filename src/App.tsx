import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import { GamePage, HomePage, LeaguesHome, NewsPage, NotFoundPage, PlayerPage, TeamPage } from "./pages";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/league" component={LeaguesHome} />
          <Route path="/player" component={PlayerPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/game" component={GamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
