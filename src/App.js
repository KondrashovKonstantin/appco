import React from 'react';
import './App.sass';
import HomePage from './components/HomePage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChartsContainer from './components/ChartsPage/ChartsContainer';
import StatsContainer from './components/StatsPage/StatsContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route path='/'>
          <header>AppCo</header>
          <Route path='/stats' component={StatsContainer} />
          <Route path='/charts/:userId?' component={ChartsContainer} />
          <footer><span className='footer-logo'>AppCo</span><span>All rights reserved by ThemeTags</span><span>Copyrights © 2019.</span></footer>
        </Route>
        <Route path='/charts/:userId?' component={ChartsContainer} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}




export default App;
