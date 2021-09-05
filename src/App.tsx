import React from 'react';
import './assets/css/styles.css'
import Home from './AppPages/Home'
import About from './AppPages/About'
import NavBar from './components/NavBar'
import Signup from './AppPages/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ForgotPassword from './AppPages/ForgotPassword';
import GuitarShop from './AppPages/GuitarShop';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/forgotPassword'>
            <ForgotPassword />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/shop'>
            <GuitarShop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
