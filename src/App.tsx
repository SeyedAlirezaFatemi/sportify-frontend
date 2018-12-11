import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { GamePage, HomePage, LeagueHomePage, NewsPage, NotFoundPage, PlayerPage, TeamPage } from './pages';
import LeaguePage from "./pages/LeaguePage/LeaguePage";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/team/:id" component={TeamPage} />
          <Route exact path="/league" component={LeagueHomePage} />
          <Route path="/league/:id" component={LeaguePage} />
          <Route path="/player" component={PlayerPage} />
          <Route path="/news/:id" component={NewsPage} />
          <Route path="/game" component={GamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
