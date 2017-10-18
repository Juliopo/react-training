import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class List extends Component {

  renderList(list) {
    return list.map((item) => {
      return [
        <li key={ item }>{ item }</li>,
      ];
    });
  }

  render() {
    const { list } = this.props;

    return (
      <ul>
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
