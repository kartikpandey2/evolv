import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './styleSheets/home.css';
import { image } from '../types/types';

export interface ReviewCardProps {
  image: image;
  productBought: string;
  reviewContent: string;
}

export const ReviewCard = (props: ReviewCardProps) => {
  const { image, productBought, reviewContent } = props;

  return (
    <div className="review-card">
      <img className="review-image" src={image.url}></img>
      <span className="review-customer-name">Sneha Sharma.</span>
      <div className="review-content">
        <blockquote>{reviewContent}</blockquote>
      </div>
    </div>
  );
};
