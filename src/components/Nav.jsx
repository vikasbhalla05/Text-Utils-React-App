import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import { Link } from "react-router-dom";

export default function NavBar(props){
  

    return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='about'>{props.aboutText}</Link>
            </li>
          </ul>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.turnDark} role="switch" id="darkMode" />
          <label className="form-check-label" htmlFor="darkMode" style={{color: props.mode==="dark" ? "white" : "black"}}>Turn on Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
    )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

NavBar.defaultProps = {
  title: "Add title here",
  aboutText: 'add about here'
}
