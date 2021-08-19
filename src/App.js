import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="dashboard/home"></Redirect>
        </Route>

        <Route path="/dashboard/:menu" exact>
          <Menu></Menu>
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
