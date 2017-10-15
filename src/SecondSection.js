import React from 'react';
import './Styles.css';

function CoreValues() {
    return (
      <div className="header-h2-position">

          <div>
              <h2> <span className="first-headline"> Core Value 1 - </span>
              <span className="next-headline"> Etiam viverra consequat nibh quis elementum. </span> </h2>
          </div>

          <br />

          <div>
              <h2> <span className="first-headline"> Core Value 2 - </span>
              <span className="next-headline"> Mollis ac fringilla vitae, volutpat vitae enim. </span>  </h2>
          </div>

          <br />

          <div>
              <h2> <span className="first-headline"> Core Value 3 - </span>
              <span className="next-headline"> Donec nec convallis nulla. Cras tortor libero. </span> </h2>
          </div>

      </div>
    );
}

function ParagraphContent() {
    return(
        <p> Ut neque nisl, venenatis et iaculis a, posuere euismod sem. Vivamus cursus dui mi, et sagittis tellus condimentum id. Sed dapibus volutpat orci ac gravida. Mauris varius justo at phareta imperdiet. Nulla purus velit, mollis ac fringilla vitae, volutpat vitae enim. </p>
    );
}

function MainHeading() {
    return(
      <div className="header-h1-position">
        <h1 className="first-headline"> Who we are - </h1>
        <h1 className="next-headline"> Creativity to the core.  </h1>
      </div>
    );
}

function HeaderTwoContent() {
    return (
      <div className="header-two-content">
        <MainHeading />
        <ParagraphContent />
        <CoreValues />
      </div>
    );
}

export default function HeaderTwo() {
    return (
        <div className="header-two">
          <HeaderTwoContent />
        </div>
    );
}
