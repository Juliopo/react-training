import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

export class List extends Component {

  renderList(list) {
    return list.map((item) => {
      return [
        <li className="list-item">
          <img alt="profile" src={ item.avatar_url } />
          <div className="info">
            <h3>{item.firstname} {item.lastname}</h3>
            <p>tel:{item.phone}</p>
          </div>
          <Link to={`/edit/${item.id}`} className="btn btn-info">Edit</Link>
        </li>
      ];
    });
  }

  render() {
    const { list } = this.props;

    return (
      <ul className="container">
        { this.renderList(list) }
      </ul>
    );
  }
}

List.defaultProps = {
  list: []
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;
