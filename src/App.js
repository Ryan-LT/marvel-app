import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import CharacterDashboard from './containers/CharacterDashboard'
import CharacterDetail from './containers/CharacterDetail'
import RemoveVowel from './components/RemoveVowel'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CharacterDashboard} />
          <Route path="/:page" exact component={CharacterDashboard} />
          <Route path="/detail/:id" component={CharacterDetail} />
          <Route path="/removeVowel" exact component={RemoveVowel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
