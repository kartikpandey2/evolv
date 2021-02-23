import * as React from 'react';
import ReactDOM from 'react-dom';
import * as data from '../.offline/initial-state.json';
import './styleSheets/home.css';
import { HairProfile } from '../hair-quiz/hair-profile';
import App from '../App';

export const HomePageOne = () => {
  function renderHairQuiz() {
    ReactDOM.render(
      <React.StrictMode>
        <HairProfile />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  return (
    <div className=" col-12 home-page-one">
      <div className=" col-6 home-one-text">
        <div>
          <h2 className="home-one-heading">
            <span className="home-one-heading-bigmessage">YOU ARE RARE</span>
            <br />
            <span className="home-one-heading-smallmessage">So should be your Customized beauty</span>
          </h2>
          <div className="divider"></div>
          <span className="home-one-content">
            Hair, Skin and Body care <br /> made for YOU <br />
          </span>
          <button className="hair-quiz-button" onClick={renderHairQuiz}>
            TAKE THE HAIR QUIZ
          </button>
        </div>
      </div>
    </div>
  );
};
