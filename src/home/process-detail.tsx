import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './styleSheets/home.css';

export const ProcessDetail = () => {
  return (
    <div className="process-detail col-12">
      <div className="step-1 col-12">
        <div className="image-step-1">
          <span className="small-circle"></span>
        </div>
        <div className="text-step-1">
          You take a detailed questionaire and tell us about your hair problems, your goals and your fragrance. There
          are hundreds of formulas but only of them is for YOU.
          <br />
          <button className="step-1-hair-quiz-button">TAKE THE HAIR QUIZ</button>
        </div>
      </div>
      <div className="step-2 col-12">
        <div className="step-2-text">
          We process your answers to determine the unique blend of clean ingredients needed to address your specific
          needs, goals, and preferences (because sometimes you need a team of eco-conscious MIT-trained scientists +
          engineers to help you with your care regimen).
          <br />
          <button className="step-2-hair-quiz-button">DEISGN YOUR HAIR FORMULA</button>
        </div>
        <div className="step-2-image">
          <span className="large-circle"></span>
        </div>
      </div>
      <div className="step-3 col-12">
        <div className="step-3-image">
          <span className="small-circle"></span>
        </div>
        <div className="step-3-text">
          Once completed, your formula(s) are delivered right to your door along with extra good stuff (think: pumps,
          stickers, gifts, personalized regimen card). We hope you like compliments ☺
          <br />
          <button className="step-3-hair-quiz-button">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};
