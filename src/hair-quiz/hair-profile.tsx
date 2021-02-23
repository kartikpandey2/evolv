import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './stylesheets/hair-quiz.css';
import { CompactFooter } from '../footer/compact-footer';
import { HairGoals } from './hair-goals';
import ReactDOM from 'react-dom';
import { TopNavBar } from '../top-nav-bar/top-nav-bar';

export const HairProfile = () => {
  function renderHairQuiz() {
    ReactDOM.render(
      <React.StrictMode>
        <HairGoals />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  const hairAndScalpProfile = data.data.hairAndScalpProfile;

  return (
    <>
      <div className="hair-profile-top-nav col-12"></div>
      <TopNavBar />
      <div className="col-12 hair-profile">
        <span className="hair-profile-heading">Tell us about your hair and scalp</span>
        {hairAndScalpProfile &&
          hairAndScalpProfile.map(hairAndScalp => (
            <div key={hairAndScalp.question} className="hair-profile-question">
              <div className="hair-type-question">{hairAndScalp.question}</div>
              <div className="hair-type-options">
                {hairAndScalp.options &&
                  hairAndScalp.options.map(option => (
                    <div className="hair-type-option" key={option.image.description}>
                      <img className="hair-type-option-image" src={option.image.url} alt={option.image.description} />
                      <span className="hair-type-option-description">{option.description}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        <button onClick={renderHairQuiz} className="hair-profile-submit-btn">
          SUBMIT
        </button>
      </div>
      <CompactFooter />
    </>
  );
};
