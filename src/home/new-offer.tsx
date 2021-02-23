import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './styleSheets/home.css';

export const NewOffer = () => {
  const offlineData = data.data;

  return (
    <div className="col-12 Offer-Bar">
      <a className="Offer-text" href="https://www.google.com/">
        {offlineData.offerTab.textstringOne}
        <img
          src={offlineData.offerTab.image.url}
          className="Offer-image"
          alt={offlineData.offerTab.image.description}
        ></img>
        {offlineData.offerTab.textstringTwo}
      </a>
    </div>
  );
};
