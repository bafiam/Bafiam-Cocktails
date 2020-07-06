import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar sticky-top navbar-dark bg-primary mb-3">
    <div className="container">

      <Link to="/" className="navbar-brand btn btn-link" data-testid="navbar-brand">Black Widow CockTails</Link>

    </div>
  </nav>
);
export default Navbar;
