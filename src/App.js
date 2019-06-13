import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Mobile from './components/Mobile/Mobile';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route component={Mobile}/>
      </Switch>
    </div>
  );
}

export default App;
