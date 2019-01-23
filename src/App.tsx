import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { GamePage, HomePage, LeagueHomePage, LeaguePage, NewsPage, NotFoundPage, PlayerPage, TeamPage } from './pages';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/team/:id" component={TeamPage} />
          <Route exact path="/league" component={LeagueHomePage} />
          <Route path="/league/soccer/:id" component={(props) => <LeaguePage {...props} sport="soccer" />} />
          <Route path="/league/basketball/:id" component={(props) => <LeaguePage {...props} sport="basketball" />} />
          <Route path="/player/soccer/:id" render={(props) => <PlayerPage {...props} sport="soccer" />} />
          <Route path="/player/basketball/:id" render={(props) => <PlayerPage {...props} sport="basketball" />} />
          <Route path="/news/:id" component={NewsPage} />
          <Route path="/game/:id" component={GamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
