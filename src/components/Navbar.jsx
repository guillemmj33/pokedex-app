import React from 'react';
import Logo from '../assets/Images/pokemon-logo.png';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg transparent">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="logo" width="150" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Pokédex by Guillem</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;