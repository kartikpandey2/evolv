import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './styleSheets/home.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutubeSquare, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactDetails = () => {
  const contactDetails = data.data;
  const contactList = contactDetails.contactDetails;
  console.log(contactList);

  return (
    <div className="col-12 contact-details">
      {contactList.map(list => {
        return (
          <div className="contact-details-product-list" key={list.heading}>
            <span className="list-heading">{list.heading}</span>
            <ul className="detail-list">
              {list.detailList.map(detail => {
                return (
                  <li key={detail}>
                    <a>{detail}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div>
        <div className="contact-logos">
          <FontAwesomeIcon icon={faFacebook} className="contact-logo facebook" />
          <FontAwesomeIcon icon={faInstagram} className="contact-logo instagram" />
          <FontAwesomeIcon icon={faYoutubeSquare} className="contact-logo youtube" />
          <FontAwesomeIcon icon={faPinterestP} className="contact-logo pinterest" />
          <FontAwesomeIcon icon={faTwitter} className="contact-logo twitter" />
        </div>
        <div className="request-email-heading">Join the Evolv Family</div>
        <div className="request-email-text">
          Get the callout for latest launches and best offers. Unsubscribe at any time
        </div>
        <div className="request-email-form">
          <form action="">
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="EMAIL ADDRESS"
              className="request-email-input"
            />
            <input type="submit" value="SUBMIT" className="request-email-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
