import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './stylesheets/top-nav-bar.css';

export const LargeNavBarRight = () => {
  return (
    <>
      <span className="top-nav-bar-item">ACCOUNT</span>
      <span className="top-nav-bar-item">CART</span>
    </>
  );
};
