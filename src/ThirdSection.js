import React from 'react';
import OrangeRightArrow from './Images/rightArrowOrange.png';
import CroutonGrey from './Images/img_logo-crouton-grey.png';
import './Styles.css';

function HandleOnSubmit() {
      return false;
}

function GetInTouchButton() {
    return (
        <button className="cta-button-contact"> GET IN TOUCH <img src={OrangeRightArrow} className="right-arrow-image" alt="Right arrow" /> </button>
    );
}

function ContactUsForm() {
    return(
      <div className="contact-us-container">
          <form onSubmit={HandleOnSubmit}>
              <div>
                  <input type="text" minLength="5" maxLength="18" placeholder="your name" required/>
                  <input type="email" minLength="5" maxLength="35" placeholder="your email" required/>
              </div>
              <input type="text" minLength="5" className="message-input-field" maxLength="200" placeholder="your message" required/>
              <GetInTouchButton />
          </form>
      </div>
    );
}

function MainHeading() {
    return(
      <div className="header-h1-position">
        <h1 className="first-headline"> Contact Us - </h1>
        <h1 className="next-headline orange-header"> We love to work.  </h1>
      </div>
    );
}

function HeaderThreeContent() {
    return (
      <div className="header-three-content">
        <MainHeading />
        <ContactUsForm />
      </div>
    );
}

function Copyrights() {
    return(
      <div>
        <img className="navbar-title-image" src={CroutonGrey} alt="Crouton grey logo" />
        <label className="fine-print"> &#169; 2017 Crouton All Rights Reserved </label>
      </div>
    );
}

export function PageFooter() {
    return (
      <footer>
          <Copyrights />
      </footer>
    );
}

export default function HeaderThree() {
  return (
      <div className="header-three">
        <HeaderThreeContent />
      </div>
  );
}
