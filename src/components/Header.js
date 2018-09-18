import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Redux Tap Room</h1>
    <NavLink to="/" className="nav-button" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/admin" className="nav-button" activeClassName="is-active">Admin</NavLink>
  </header>
);

export default Header;