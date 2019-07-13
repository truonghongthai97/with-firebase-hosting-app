import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import bkg from '../../static/images/bkg.jpg';
import './main.scss';
import { AboutMe } from './components';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <AboutMe />
      </div>
    );
  }
}
