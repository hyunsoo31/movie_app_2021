import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Movie</Link>
      <Link to="/about">About</Link>
      <Link to="/">Test1</Link>
      <Link to="/">Test2</Link>
      <Link to="/">Test3</Link>
      <Link to="/">Test4</Link>
    </div>
  )
}

/*
<div class="back">
    <div class="button_base b04_3d_tick">
        <div>01_Button</div>
        <div>01_Button</div>
    </div>
</div>
*/

export default Navigation;