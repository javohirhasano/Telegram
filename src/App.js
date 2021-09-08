import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './pages/Menu';
import Home from './pages/Home';
import store from './redux/storee';
import Elbek from './pages/Elbek';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="dashboard/home" />
          </Route>
          <Route path="/about" exact>
            <Elbek />
          </Route>

          <Route path="/dashboard/:menu" exact>
            <Menu></Menu>
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
