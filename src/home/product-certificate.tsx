import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './styleSheets/home.css';

export const ProductCertificate = () => {
  return (
    <div className="col-12 product-certificate">
      <div className="col-4 product-certificate-text">
        <div>
          <div className="product-certificate-heading">Clean, Sustainable and Science-backed formulas</div>
          <div className="product-certificate-content">
            Every product we formulate is free of sulfates, parabens, phthalates, mineral oils, gluten, and is always
            vegan + cruelty-free.
          </div>
          <br />
          <div className="product-certificate-logos">
            <img
              className="product-certificate-image"
              src="https://www.functionofbeauty.com/images/homepage/v1/company-values/badges/1.png"
            ></img>
            <img
              className="product-certificate-image"
              src="https://www.functionofbeauty.com/./images/homepage/v1/company-values/badges/2.png"
            ></img>
            <img
              className="product-certificate-image"
              src="https://www.functionofbeauty.com/images/homepage/v1/company-values/badges/3.png"
            ></img>
            <img
              className="product-certificate-image"
              src="https://www.functionofbeauty.com/images/homepage/v1/company-values/badges/4.png"
            ></img>
            <img
              className="product-certificate-image"
              src="https://www.functionofbeauty.com/images/homepage/v1/company-values/badges/5.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
