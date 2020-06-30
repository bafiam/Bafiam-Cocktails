import React from "react";
import history from '../actions/History';
export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" onClick={() => history.push('/')}>
        Black Widow CockTails
        </a>
      </div>
    </nav>
  );
}
