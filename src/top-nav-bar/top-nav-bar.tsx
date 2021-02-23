import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './stylesheets/top-nav-bar.css';
import { LargeNavBarLeft } from './large-nav-bar-left';
import { LargeNavBarRight } from './large-nav-bar-right';

export const TopNavBar = () => {
  const hairGoals = data.data.hairGoals;
  const value = '';

  return (
    <div className="top-nav-bar col-12">
      <LargeNavBarLeft />
      <span className="top-nav-bar-item">
        <span className="nav-bar-logo">evolv.</span>
      </span>
      <LargeNavBarRight />
    </div>
  );
};
