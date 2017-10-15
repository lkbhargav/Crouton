import React from 'react';
import HeaderOne from './FirstSection';
import HeaderTwo from './SecondSection';
import HeaderThree, {PageFooter} from './ThirdSection';
import './Styles.css';

export default function App() {
    return (
      <div>
          <HeaderOne />
          <HeaderTwo />
          <HeaderThree />
          <PageFooter />
      </div>
    );
}
