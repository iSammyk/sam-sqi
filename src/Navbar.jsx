import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
    <div className='mbo'>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid d-flex justify-content-around bgg">
    <div className='container d-flex justify-content-between'>
    <a className="navbar-brand" href="#">
    <img className='mx-2 alien' src={require('../src/sqi-logo.jpg')}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse bosss" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-primary checkk" aria-current="page" href="#">About    <i class="fa fa-angle-down"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-primary" href="#">Progremmes    <i class="fa fa-angle-down"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-primary" href="#">Admissions    <i class="fa fa-angle-down"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-primary" href="#">E-Portals    <i class="fa fa-angle-down"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-primary" href="#">SQI Schorlaship </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-primary" href="#">News </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className=' noss'>
        <button className='text-light fs-5 dol p-2 trep'>
        <i class="fa fa-facebook"></i>
        </button>
        <button className='text-light bg-info fs-5 dol p-2'>
        <i class="fa fa-twitter"></i>
        </button>
        <button className='text-light fs-5 dol p-2 step'>
        <i class="fa fa-linkedin"></i>
        </button>
    </div>
    </div>
    </>
  )
}
