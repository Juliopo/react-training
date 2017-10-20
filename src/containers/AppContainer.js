import React, { Component } from 'react';
import { Link } from 'react-router';

import { history } from '../store';
import ListContainer from './ListContainer';
import '../styles/styles.scss';

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3 text-center">Velocity Training</h1>
          </div>
        </div>
        <Link to="/list">Go to List</Link>
        { this.props.children }
      </div>
    );
  }
}

export default AppContainer;
