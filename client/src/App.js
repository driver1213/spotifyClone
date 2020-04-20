import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { injectGlobal } from 'styled-components';
import 'normalize.css/normalize.css';
import Home from './components/Pages/Home';
import DashboardPage from './components/Pages/Dashboard';
import ProfilePage from './components/Pages/Profile';
import ArtistPage from './components/Pages/Artist';
import NoMatchPage from './components/Pages/NoMatch';
import DiscoverPage from './components/Pages/Discover';

injectGlobal`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Nunito', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }

  .App {
    margin-left: 0px;
    background: #f6f7fb;
    height: 1000vh;

  @media (min-width: 480px) {
    margin-left: 300px;
  }

  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/artist" component={ArtistPage} />
              <Route exact path="/discover" component={DiscoverPage} />
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
