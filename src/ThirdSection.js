import React from 'react';
import $ from 'jquery';
import OrangeRightArrow from './Images/rightArrowOrange.png';
import CroutonGrey from './Images/img_logo-crouton-grey.png';
import './Styles.css';

function HandleOnSubmit(e) {
  // Starts wait animation
  $("#waitAnim").css({"display": "block", "margin":"auto"});

  // Makes a POST request to server with the form data
  $.post("http://71.232.9.45:1299/contactus",
        {
          name: $("#name").val(),
          message: $("#message").val(),
          email: $("#email").val()
        },
        function(data,status){
            // On successful POST call
            if(data.results.status == "200") {
                $("#gratitude").text("Thank you for contacting!");
                $("#waitAnim").css("display", "none");
                // Clears the gratitude message after 7s
                setTimeout(function() {
                    $("#gratitude").text("");
                }, 7000);

                // Resets all the fields
                $("#name").val("").css("background-color", "#645F5F !important");
                $("#message").val("").css("background-color", "#645F5F !important");
                $("#email").val("").css("background-color", "#645F5F !important");
            }
        });
      e.preventDefault();
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
          <form onSubmit={HandleOnSubmit} autoComplete="off">
              <div>
                  <input type="text" minLength="1" maxLength="20" id="name" placeholder="your name" required/>
                  <input type="email" minLength="3" maxLength="40" id="email" placeholder="your email" required/>
              </div>
              <input type="text" minLength="3" className="message-input-field" id="message" maxLength="300" placeholder="your message" required/>
              <GetInTouchButton />
              <span id="gratitude">  </span> <div id="waitAnim"> </div>
          </form>
      </div>
    );
}

function MainHeading() {
    return(
      <div className="header-h1-position">
          <h1>
              <span className="first-headline"> Contact Us - </span>
              <span className="next-headline orange-header"> We love to work. </span>
          </h1>
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
