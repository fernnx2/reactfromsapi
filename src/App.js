import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './containers/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
