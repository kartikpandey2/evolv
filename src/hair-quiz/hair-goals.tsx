import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './stylesheets/hair-quiz.css';
import { CompactFooter } from '../footer/compact-footer';

export const HairGoals = () => {
  const hairGoals = data.data.hairGoals;
  const value = '';

  return (
    <>
      <div className="hair-goals">
        <h3>{hairGoals.question}</h3>
        <form>
          <input type="hidden" value={value} value-id="goals" name="goals" />
          {hairGoals.options.map(option => (
            <a key={option} className="goal-btn">
              {option}
            </a>
          ))}
        </form>
        <button>Previous</button>
        <button>Next</button>
      </div>
      <CompactFooter />
    </>
  );
};
