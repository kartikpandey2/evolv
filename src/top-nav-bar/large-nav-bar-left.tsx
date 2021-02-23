import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './stylesheets/top-nav-bar.css';
import { NavBarDropDown } from './nav-bar-dropdown';

export const LargeNavBarLeft = () => {
  return (
    <>
      <span className="top-nav-bar-item">QUIZ</span>
      <span className="top-nav-bar-item">REVIEWS</span>
    </>
  );
};
