import React from 'react';
import Home from './Home';
import { NavLink, Route, Switch } from 'react-router-dom'
import Features from './Features'
import Contacts from './Contacts'
import Logo from './Logo'
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      <div className='menu'>
        <Logo/>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='selected'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/features' activeClassName='selected'>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to='/contacts' activeClassName='selected'>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/features'>
          <Features/>
        </Route>
        <Route>
          <Contacts/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
