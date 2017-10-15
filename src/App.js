import React, { Component } from 'react';
import HeaderOne from './FirstSection';
import HeaderTwo from './SecondSection';
import HeaderThree, {PageFooter} from './ThirdSection';
import './Styles.css';

class App extends Component {

    constructor(props) {
        super(props);
    }

  render() {
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

export default App;
