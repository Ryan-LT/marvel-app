import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import CharacterDashboard from './containers/CharacterDashboard'
import CharacterDetail from './containers/CharacterDetail'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CharacterDashboard} />
          <Route path="/:id" component={CharacterDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
