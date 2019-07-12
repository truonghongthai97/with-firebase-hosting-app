import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import bkg from '../../static/images/bkg.jpg';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Index Page haha </p>
        <div>Hello World!</div>
        <img src={bkg} alt="" />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}
