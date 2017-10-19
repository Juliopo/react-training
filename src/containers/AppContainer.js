import React, { Component } from 'react';

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
        { this.props.children }
      </div>
    );
  }
}

export default AppContainer;
