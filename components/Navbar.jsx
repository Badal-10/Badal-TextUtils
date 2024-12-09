
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


export default function Navbar() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = mode === 'light' ? '#021526' : '#F5EFFF';
    document.body.style.color = mode === 'light' ? '#e6e6fa' : '#000000';

  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-${mode}  bg-${mode}`} style={{ backgroundColor: mode === 'dark' ? '#292b3b' : '#f8f9fa', color: mode === 'dark' ? '#e6e6fa' : '#000000' }}>
        <div className="container-fluid">

          <NavLink className="navbar-brand "to="/"><h2>TextUtils</h2> </NavLink>
           
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
              </li>
            </ul>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
           <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"> {mode === 'light' ? ' Light ' : ' Dark '}</label>
          </div>
        </div>
      </nav>
    </>
  )
}



