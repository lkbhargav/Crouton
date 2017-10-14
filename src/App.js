import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles.css';

function HandleOnSubmit() {
      return false;
}

function NavHeader() {
    return (
      <ul className="navbar-container">
          <li> <img className="navbar-title-image" src={require('./Images/img_logo-crouton-full.png')} alt="" /> </li>
          <li className="nav-item"> <a href="#" className="disable-hyperlink-styles"><span> / </span> About </a> </li>
          <li className="nav-item"> <a href="#" className="disable-hyperlink-styles"><span> / </span> Our Team </a> </li>
       </ul>
    );
}

function HeaderOneContent() {
    return (
      <div className="header-one-content">
        <h3> a complete creative agency. </h3>
        <div className="header-h1-position">
          <h1 className="first-headline"> Crouton - </h1>
          <h1 className="next-headline"> Where learning never stops.  </h1>
        </div>
        <button className="cta-button"> DISCOVER MORE <img src={require('./Images/rightArrow.png')} className="right-arrow-image" alt="" /> </button>
      </div>
    );
}

function MainImage() {
    return(
      <div className="main-image-container">
        <img src={require('./Images/img_bg-main.jpg')} className="main-image" alt="" />
      </div>
    );
}

function HeaderOne() {
  return (
    <div className="header-one">
        <NavHeader />
        <HeaderOneContent />
        <MainImage />
    </div>
  )
}

function HeaderTwoContent() {
    return (
      <div className="header-two-content">
        <div className="header-h1-position">
          <h1 className="first-headline"> Who we are - </h1>
          <h1 className="next-headline"> Creativity to the core.  </h1>
        </div>
        <p> Ut neque nisl, venenatis et iaculis a, posuere euismod sem. Vivamus cursus dui mi, et sagittis tellus condimentum id. Sed dapibus volutpat orci ac gravida. Mauris varius justo at phareta imperdiet. Nulla purus velit, mollis ac fringilla vitae, volutpat vitae enim. </p>
        <h2 className="first-headline"> Core Value 1 - </h2>
        <h2 className="next-headline"> Etiam viverra consequat nibh quis elementum.  </h2>
        <h2 className="first-headline"> Core Value 2 - </h2>
        <h2 className="next-headline"> Mollis ac fringilla vitae, volutpat vitae enim.  </h2>
        <h2 className="first-headline"> Core Value 3 - </h2>
        <h2 className="next-headline"> Donec nec convallis nulla. Cras tortor libero. </h2>
      </div>
    );
}

function HeaderTwo() {
    return (
        <div className="header-two">
          <HeaderTwoContent />
        </div>
    );
}

function HeaderThreeContent() {
    return (
      <div className="header-three-content">
        <div className="header-h1-position">
          <h1 className="first-headline"> Contact Us - </h1>
          <h1 className="next-headline orange-header"> We love to work.  </h1>
        </div>
        <form onSubmit={HandleOnSubmit}>
            <input type="text" minLength="5" maxLength="18" placeholder="your name" required/>
            <input type="email" minLength="5" maxLength="35" placeholder="your email" required/>
            <input type="text" minLength="5" maxLength="200" placeholder="your message" required/>
            <button className="cta-button-contact"> GET IN TOUCH <img src={require('./Images/rightArrowOrange.png')} className="right-arrow-image" alt="" /> </button>
        </form>
      </div>
    );
}

function PageFooter() {
    return (
      <footer>
        <div>
          <img className="navbar-title-image" src={require('./Images/img_logo-crouton-grey.png')} alt="" />
          <label className="fine-print"> &#169; 2017 Crouton All Rights Reserved </label>
        </div>
      </footer>
    );
}

function HeaderThree() {
    return (
        <div className="header-three">
          <HeaderThreeContent />
        </div>
    );
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDefault: false
        };
    }

  render() {
    if(this.state.showDefault) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is h1</h1>
          <h2>This is h2</h2>
          <h3>This is h3 </h3>
          <p>This is simple paragraph. </p>
          <ul>
              <span className="nav-item">/</span><li className="nav-item"> First Item </li>
          </ul>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    } else {
        return (
          <div>
            <HeaderOne />
            <HeaderTwo />
            <HeaderThree />
            <PageFooter />
          </div>
        );
    }
  }
}

export default App;
