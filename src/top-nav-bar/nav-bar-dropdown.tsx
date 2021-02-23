import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './stylesheets/top-nav-bar.css';

export const NavBarDropDown = () => {
  function dropContent() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById('myDropDown').classList.toggle('show');
  }

  return (
    <div>
      <div className="dropbtn" onClick={dropContent}>
        DROP DOWN
      </div>
      <div id="myDropDown" className="dropbtnContent">
        <a>Content 1</a>
        <a>Content 2</a>
        <a>Content 3</a>
      </div>
    </div>
  );
};
