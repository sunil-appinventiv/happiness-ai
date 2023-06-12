import React from 'react';
import LocalImages from '../images/index';
import Image from './Image';


const Header = () => {
  return (
    <header class="main-header">
    <div class="container">
      <nav class="">
        <div class="logo">
          <figure><Image src={LocalImages.Logo} alt='Logo'/> </figure><div class="h6">happiness ai</div>
        </div>

        <div class="right">
          <ul class="nav">
            <li><a href="javascript:;">Mission</a></li>
            <li><a href="javascript:;">Services</a></li>
            <li><a href="javascript:;">What makes us happy?</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;
