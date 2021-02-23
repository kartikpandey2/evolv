import * as React from 'react';
import * as data from '../.offline/initial-state.json';
import './stylesheets/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterestP, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export const CompactFooter = () => {
  const hairAndScalpProfile = data.data.hairAndScalpProfile;

  return (
    <div className="col-12 compact-footer">
      <div className="contact-logos col-6 compact-footer-logos">
        <FontAwesomeIcon icon={faFacebook} className="compact-footer-contact-logo facebook" />
        <FontAwesomeIcon icon={faInstagram} className="compact-footer-contact-logo instagram" />
        <FontAwesomeIcon icon={faYoutubeSquare} className="compact-footer-contact-logo youtube" />
        <FontAwesomeIcon icon={faPinterestP} className="compact-footer-contact-logo pinterest" />
        <FontAwesomeIcon icon={faTwitter} className="compact-footer-contact-logo twitter" />
      </div>
      <div className="compact-footer-text col-6">
        <span className="compact-footer-text-item">CONTACT</span>
        <span className="compact-footer-text-item">CAREER</span>
        <span className="compact-footer-text-item">PRIVACY</span>
        <span className="compact-footer-text-item">TERMS</span>
      </div>
    </div>
  );
};
