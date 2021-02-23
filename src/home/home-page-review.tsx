import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './styleSheets/home.css';
import { ReviewCard } from './review-card';

export const HomePageReview = () => {
  const reviews = data.data.displayReviews;

  return (
    <div className="col-12 reviews-section">
      <div className="happy-customers-text">
        Hundreds of <span className="happy-customers">HAPPY CUSTOMERS</span>
      </div>
      <div className="review-carousel">
        {reviews.map(review => (
          <ReviewCard
            image={review.image}
            reviewContent={review.reviewContent}
            productBought={review.productBought}
            key={review.reviewContent}
          />
        ))}
      </div>
    </div>
  );
};
