import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import { GamePage, HomePage, LeagueHomePage, LeaguePage, NewsPage, NotFoundPage, PlayerPage, TeamPage } from './pages';
import rootReducer from './reducers';
import { Sports } from './utils';

const store = createStore(rootReducer);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/team/soccer/:id" component={(props) => <TeamPage {...props} sport={Sports.SOCCER} />} />
            <Route path="/team/basketball/:id"
                   component={(props) => <TeamPage {...props} sport={Sports.BASKETBALL} />} />
            <Route exact path="/league" component={LeagueHomePage} />
            <Route path="/league/soccer/:id" component={(props) => <LeaguePage {...props} sport={Sports.SOCCER} />} />
            <Route path="/league/basketball/:id"
                   component={(props) => <LeaguePage {...props} sport={Sports.BASKETBALL} />} />
            <Route path="/player/soccer/:id" render={(props) => <PlayerPage {...props} sport={Sports.SOCCER} />} />
            <Route path="/player/basketball/:id"
                   render={(props) => <PlayerPage {...props} sport={Sports.BASKETBALL} />} />
            <Route path="/news/:id" component={NewsPage} />
            <Route path="/game/:id" component={GamePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
