import React from 'react';
import CroutonFull from './Images/img_logo-crouton-full.png';
import GreyRightArrow from './Images/rightArrow.png';
import TwoStudents from './Images/img_bg-main.jpg';
import './Styles.css';

function NavHeader() {
    return (
      <ul className="navbar-container">
          <li> <img className="navbar-title-image" src={CroutonFull} alt="Crouton full logo" /> </li>
          <li className="nav-item"> <a href="#"><span> / </span> About </a> </li>
          <li className="nav-item"> <a href="#"><span> / </span> Our Team </a> </li>
       </ul>
    );
}

function MainHeading() {
    return (
      <div className="header-h1-position">
            <h1>
                <span className="first-headline"> Crouton - </span>
                <span className="next-headline"> Where learning never stops. </span>
            </h1>
      </div>
    );
}

function DiscoverMoreButton() {
    return (
      <button className="cta-button"> DISCOVER MORE <img src={GreyRightArrow} className="right-arrow-image" alt="Right arrow" /> </button>
    );
}

function HeaderOneContent() {
    return (
      <div className="header-one-content">
        <h3> a complete creative agency. </h3>
        <MainHeading />
        <DiscoverMoreButton />
      </div>
    );
}

function MainImage() {
    return(
      <div className="main-image-container">
        <img src={TwoStudents} className="main-image" alt="Two students looking at notice board." />
      </div>
    );
}

export default function HeaderOne() {
  return (
    <div className="header-one">
        <NavHeader />
        <HeaderOneContent />
        <MainImage />
    </div>
  )
}
