import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <div className="back">
        <div class="button_base b04_3d_tick">
        <a href ="https://hyunsoo31.github.io/">Intro</a>
        <a href ="https://hyunsoo31.github.io/">Intro</a>
        </div>
      </div>
      <div className="back">
        <div class="button_base b04_3d_tick">
        <Link to="/">Movie</Link>
        <Link to="/">Movie</Link>
        </div>
      </div>
      <div className="back">
        <div class="button_base b04_3d_tick">
        <Link to="/about">About</Link>
        <Link to="/about">About</Link>
        </div>
      </div>
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